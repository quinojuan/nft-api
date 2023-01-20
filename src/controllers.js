const axios = require("axios");
const cloudinary = require("cloudinary");

// NO LA ESTOY UTILIZANDO POR EL MOMENTO
const getNft = () => {
  const { id } = req.params;
  const options = {
    method: "GET",
    url: `https://staging.crossmint.io/api/2022-06-09/collections/default-solana/nfts/${id}`,
    headers: {
      "x-client-secret": "sk_test.w6RqyPVx.qlMMRjgEf6zUyANkb1JZQ757cBgQblod",
      "x-project-id": "d67d4d9d-10aa-481c-81ae-b150baf8aff6",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

const putNft = async (req, res) => {
  const {
    clientSecret,
    projectId,
    nftName,
    email,
    name,
    description,
    traitType,
    value,
    image,
  } = req.body;
  console.log(req.body);
  const options = {
    method: "PUT",
    url: `https://staging.crossmint.io/api/2022-06-09/collections/default-solana/nfts/${nftName}`, //leandro
    headers: {
      "content-type": "application/json",
      "x-client-secret": `${clientSecret}`,
      "x-project-id": `${projectId}`,
    },
    data: {
      recipient: `email:${email}:solana`,
      metadata: {
        name: `${name}`,
        image: `${image}`,
        description: `${description}`,
        attributes: [{ trait_type: `${traitType}`, value: `${value}` }],
      },
    },
  };

  await axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

const welcome = (req, res) => {
  res.json("Welcome to an API where you can create your first Test NFT");
};

const deleteImage = async (req, res) => {
  const { public_id } = req.params;
  console.log(public_id);
  try {
    const result = await cloudinary.uploader.destroy(public_id);
    console.log(result);
    res.status(200).send("ok");
  } catch (error) {
    res.status(400).send("not found");
  }
};

module.exports = {
  getNft,
  putNft,
  welcome,
  deleteImage,
};
