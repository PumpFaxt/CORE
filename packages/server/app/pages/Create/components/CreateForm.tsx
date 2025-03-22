import { useState } from "react";
import Icon from "../../../shared/components/Icon";
import ImageUpload from "../../../shared/components/ImageUpload";
import api from "../../../shared/hooks/api";
import useEnsureFrxUsdPermit from "../../../shared/hooks/useEnsureFrxUsdPermit";
import FormInputCard from "./FormInputCard";
import { generateMetaTxRequest } from "../../../shared/utils/utils";
import { usePrivy } from "@privy-io/react-auth";
import axios from "axios";

export default function () {
  useEnsureFrxUsdPermit();

  const privy = usePrivy();
  const { mutate: launchToken } = api.useNewToken();
  const { data: nonce } = api.useRelayNonce();

  const [name, setName] = useState("");
  const [ticker, setTicker] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File>();

  async function handleLaunch() {
    const req = await generateMetaTxRequest(privy, BigInt(nonce), {
      functionName: "launchToken",
      args: [
        ["string", "string"],
        [name, ticker],
      ],
    });

    launchToken(
      { req, description, image },
      {
        onSuccess: () => {
          console.log("Launhced")
        },
      }
    );
  }

  return (
    <>
      <div className="p-4 flex flex-col gap-y-5">
        <ImageUpload setImage={(img) => setImage(img)} />

        <FormInputCard
          label="Name"
          placeholder="My Token"
          state={[name, setName]}
        />

        <FormInputCard
          label="Ticker"
          placeholder="PUPA"
          symbol="$"
          state={[ticker, setTicker]}
        />

        <FormInputCard
          field="textarea"
          label="Description"
          placeholder="Much token, very meme."
          state={[description, setDescription]}
        />

        <button
          className="rounded-xl bg-primary p-2 flex items-center justify-center gap-x-1 text-lg"
          onClick={handleLaunch}
        >
          Launch <Icon name="rocket" />
        </button>
      </div>
    </>
  );
}
