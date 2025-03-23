import { useState } from "react";
import Icon from "../../../shared/components/Icon";
import ImageUpload from "../../../shared/components/ImageUpload";
import api from "../../../shared/hooks/api";
import useEnsureFrxUsdPermit from "../../../shared/hooks/useEnsureFrxUsdPermit";
import FormInputCard from "./FormInputCard";
import { cn, generateMetaTxRequest } from "../../../shared/utils/utils";
import { usePrivy } from "@privy-io/react-auth";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router";

export default function () {
  useEnsureFrxUsdPermit();

  const privy = usePrivy();
  const { mutate: launchToken, isPending } = api.useNewToken();
  const { data: nonce } = api.useRelayNonce();

  const [name, setName] = useState("");
  const [ticker, setTicker] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File>();

  const navigate = useNavigate()

  async function handleLaunch() {
    if (!name) return toast.error("Please enter a token name");
    if (!ticker) return toast.error("Please enter a token ticker");
    if (!description) return toast.error("Please enter a description");
    if (!image) return toast.error("Please upload an image");
    if (!nonce) return toast.error("Unable to get nonce");
    if (name.length < 3) return toast.error("Token name too short");
    if (name.length > 32) return toast.error("Token name too long");
    if (ticker.length < 1) return toast.error("Token ticker too short");
    if (ticker.length > 6) return toast.error("Token ticker too long");
    if (description.length < 10) return toast.error("Description too short");
    if (description.length > 256) return toast.error("Description too long");

    const req = await generateMetaTxRequest(privy, BigInt(nonce), {
      functionName: "launchToken",
      args: [
        ["string", "string"],
        [name, ticker],
      ],
    });

    const promise = () => new Promise((resolve) => 
      launchToken(
        { req, description, image },
        {
          onSuccess: (data) => {
            resolve(data.address)
            navigate("/")
          },
        }
      )
    )
    toast.promise(promise, {
      loading: 'Launching...',
      success: (data) => {
        return `Token has been launched at address ${data}`;
      },
      error: 'Error',
    });
  }

  return (
    <>
      <div
        className={cn(
          "p-4 flex flex-col gap-y-5",
          isPending && "opacity-75 animate-pulse pointer-events-none"
        )}
      >
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
          Launch{" "}
          <Icon name="rocket" className={cn(isPending && "motion-preset-bounce")} />
        </button>
      </div>
    </>
  );
}
