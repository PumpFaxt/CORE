import { Pressable, Text, Vibration, View } from "react-native";
import keychain from "@/shared/utils/keychain";
import { useEffect, useState } from "react";
import { useModalActions } from "./shared/hooks/globalSessionStorage/modal";
import { usePersistentStorage } from "./shared/hooks/usePersistentStorage";
import screens from "@/pages";
import GlobalModal from "./shared/components/GlobalModal";

export default function () {
  const [add, setAdd] = useState("");

  const [userHasBeenWelcomed] = usePersistentStorage("user.has_been_welcomed");
  const modalActions = useModalActions();
  useEffect(() => {
    if (!userHasBeenWelcomed) {
      modalActions.show(<screens.Welcome />);
    }
  }, []);

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
            Vibration.vibrate(300);
            modalActions.show(
              <View>
                <Text>Hi my name is Spandan and I am very good yeah</Text>
              </View>
            );
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

      <GlobalModal />
    </View>
  );
}
