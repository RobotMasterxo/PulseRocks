import Head from "next/head";
import Title from "@/components/title";
import NFTCard from "@/components/card";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { CONTRACT_ADDRESS, abi } from "@/contract/contract";
import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";

const IMAGE =
  "./hex_1.png";

export default function Mint() {
  const _mintAmount = 1;
  const toast = useToast();

  const { config } = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi: abi,
    functionName: "mint",
    args: [_mintAmount],
    onError: (error) => {
      console.log("Error", error);
    },
    onSuccess: (result) => {
      console.log("Success", result);
    },
  });

  const { data, write, error } = useContractWrite(config);
  const { isSuccess } = useWaitForTransaction({ hash: data?.hash });

  useEffect(() => {
    console.log("isSuccess", isSuccess);
    console.log("error", error);
    if (isSuccess) {
      toast({
        title: "NFT Minted",
        description: "Your first NFT has been minted successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
    if (error) {
      toast({
        title: "Error",
        description: "There was an error minting this token: " + error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [isSuccess, error]);

  return (
    <>
      <Head>
        <title>Mint</title>
        <meta name="description" content="mintfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-4 md:px-0 my-14 mx-auto max-w-[1080px]">
        <Title title="Mint your NFT SOON" />
        <NFTCard
          image={IMAGE}
          tag="372 exclusive  NFTS"
          title="Coming soon"
          onClick={() => write?.()}
        />
      </main>
    </>
  );
}
