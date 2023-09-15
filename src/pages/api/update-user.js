import prisma from '../../../prisma/client';

export default async function handle(request, response) {
  if (request.query?.id && request.query?.colorSchema) {
    try {
      const { id, colorSchema } = request.query;

      if (id && colorSchema) {
        await prisma.user.update({
          where: { id },
          data: {
            colorSchema,
          },
        });
      } else {
        return response.status(400);
      }

      return response.status(200).json({
        message: 'User updated',
      });
    } catch (e) {
      return response.status(403).json({ err: `Failed to update user – ${e.message}` });
    }
  }
}
