import dbConnect from "../../../db/connect";
import Place from "../../../db/models/Place";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  await dbConnect();
  const session = await getServerSession(req, res, authOptions);

  if (request.method === "GET") {
    const places = await Place.find();
    return response.status(200).json(places);
  }

  if (session) {
    try {
      const placeData = request.body;
      await Place.create(placeData);
      return response.status(201).json({ status: "Place created." });
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
// export default async (req, res) => {
//   const session = await getServerSession(req, res, authOptions)
//   if (session) {
//     res.send({
//       content:
//         "This is protected content. You can access this content because you are signed in.",
//     })
//   } else {
//     res.send({
//       error: "You must be signed in to view the protected content on this page.",
//     })
//   }
// }
