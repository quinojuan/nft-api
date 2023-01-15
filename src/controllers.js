const axios = require("axios");
const { response } = require("express");

const getNft = () => {
  const options = {
    method: "GET",
    url: `https://staging.crossmint.io/api/2022-06-09/collections/default-solana/nfts/${variable1}`,
    headers: {
      "x-client-secret": "sk_test.48qATEKS.XjtH1Rizp7YI2swJuYq884HHRKYn1BWN",
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

  const { clientSecret, projectId, nftName, email, name, description, traitType, value, image } = req.body;
console.log(req.body);
  const options = {
    method: "PUT",
    url: `https://staging.crossmint.io/api/2022-06-09/collections/default-solana/nfts/${nftName}`, //leandro
    headers: {
      "content-type": "application/json",
      "x-client-secret": `${clientSecret}`, // sk_test.pk8ecXDQ.4sEBiSAEz3ViEilri9UyELT915d6c0jG
      "x-project-id": `${projectId}` // d67d4d9d-10aa-481c-81ae-b150baf8aff6
    },
    data: {
      recipient: `email:${email}:solana`,
      metadata: {
        name: `${name}`, // leandroNFT,
        image: `${image}`,
        description: `${description}`, // LeaNDRO-description
        attributes: [{ trait_type: `${traitType}`, value: `${value}`}], // algo / true 
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
  res.json("Welcome to an API where you can create an unreal NFT");
  // res.send("Welcome to easy create a NFT")
}
module.exports = {
  getNft,
  putNft,
  welcome
};
