import Product from "../../models/Product";
import db from "../../utils/db";
import data from "../../utils/data";

const handler = async (req, res) => {
  await db.connect();
  //const products = await Product.find({});
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await db.disconnect();
  res.send({ message: "seeded successfully" });
  //res.send({ products });
};

export default handler;
