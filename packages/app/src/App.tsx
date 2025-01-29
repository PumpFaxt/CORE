import { Pressable, Text, Vibration, View } from "react-native";
import keychain from "./shared/utils/keychain";
import { useState } from "react";

export default function () {
  const [add, setAdd] = useState("");

  return (
    <View className="h-screen bg-background">
      <Text className="text-primary font-bold">
        Open up App.tsx to start working on your app!
      </Text>
      <Text>Open up App.tsx to start working on your app!</Text>

      <Text className="text-teal-300">Address : {add}</Text>

      <View className="bg-red-200 flex flex-col gap-y-10">
        <Pressable
          onPress={async () => {
            Vibration.vibrate(1000);
            await keychain.clearExistingAndCreateAndStoreNewSeedPhrase();
            alert("hogya");
          }}
        >
          <Text>gen</Text>
        </Pressable>

        <Pressable
          onPress={async () => {
            setAdd(await keychain.getPublicKeyAndCreateWalletIfNeeded());
          }}
        >
          <Text>address</Text>
        </Pressable>

        <Pressable
          onPress={async () => {
            await keychain.clearSeedPhraseIfExists();
            alert("test");
          }}
        >
          <Text>destroy</Text>
        </Pressable>

        <Pressable
          onPress={async () => {
            alert(await keychain.UNSAFE_getSeedPhrase());
          }}
        >
          <Text>read</Text>
        </Pressable>
      </View>
    </View>
  );
}
