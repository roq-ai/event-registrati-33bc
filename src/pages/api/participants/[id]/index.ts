import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { participantValidationSchema } from 'validationSchema/participants';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.participant
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getParticipantById();
    case 'PUT':
      return updateParticipantById();
    case 'DELETE':
      return deleteParticipantById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getParticipantById() {
    const data = await prisma.participant.findFirst(convertQueryToPrismaUtil(req.query, 'participant'));
    return res.status(200).json(data);
  }

  async function updateParticipantById() {
    await participantValidationSchema.validate(req.body);
    const data = await prisma.participant.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteParticipantById() {
    const data = await prisma.participant.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
