import dbConnect from "../../../../db/connect";
import Place from "../../../../db/models/Place";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const place = await Place.findById(id);

    if (!place) {
      return response.status(404).json({ status: "Not Found" });
    }

    return response.status(200).json(place);
  }

  if (request.method === "PATCH") {
    await Place.findByIdAndUpdate(id, {
      $set: request.body,
    });
    return response.status(200).json({ status: `Place ${id} updated!` });
  }

  if (request.method === "DELETE") {
    try {
      await Place.findByIdAndDelete(id);

      return response.status(200).json({ status: "Place deleted!" });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
