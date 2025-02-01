import { PermissionsAndroid, Platform } from "react-native";

export async function requestNotificationPermission() {
    return new Promise<void>((resolve, reject) => {
        if (Platform.OS === "android") {
            try {
                PermissionsAndroid.check(
                    "android.permission.POST_NOTIFICATIONS",
                )
                    .then(
                        (response) => {
                            if (!response && Number(Platform.Version) >= 33) {
                                PermissionsAndroid.request(
                                    "android.permission.POST_NOTIFICATIONS",
                                    {
                                        title: "hi",
                                        message:
                                            "App needs access to your notification " +
                                            "so you can get Updates",
                                        buttonPositive: "OK",
                                        buttonNeutral: "Ask Me Later",
                                        buttonNegative: "Cancel",
                                    },
                                ).then((response) => {
                                    console.log(response);
                                    resolve();
                                });
                            }
                        },
                    ).catch(
                        (err) => {
                            console.log("NotificationPermission Error ", err);
                        },
                    );
            } catch (err) {
                console.log(err);
            }
        }
    });
}
