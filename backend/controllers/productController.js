import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestSeller,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    let images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    const imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    // save in data base 
    const productData = {
        name,
        description,
        category,
        price:Number(price),
        subCategory,
        bestSeller:bestSeller==="true" ? true : false,
        sizes:JSON.parse(sizes),
        image:imagesUrl,
        date:Date.now()
    }

    console.log(productData);

    const product = new productModel(productData);
    await product.save();
    res.json({success:true, message:"Product added"})

    // console.log(
    //   name,
    //   description,
    //   price,
    //   category,
    //   subCategory,
    //   sizes,
    //   bestSeller
    // );

    // console.log(imagesUrl);
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const listProduct = async (req, res) => {};

const removeProduct = async (req, res) => {};

const singleProduct = async (req, res) => {};

export { listProduct, addProduct, removeProduct, singleProduct };
