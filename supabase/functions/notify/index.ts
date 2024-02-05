import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import * as OneSignal from "https://esm.sh/@onesignal/node-onesignal@1.0.0-beta7";

const _OnesignalAppId_ = "e1885cbd-728f-40e5-b848-be1402f8d286";
const _OnesignalUserAuthKey_ =
  "NDMyMjExMTQtNjJmMC00ODE5LTkxZjAtZTk0MDdlNmU2NWJk";
const _OnesignalRestApiKey_ =
  "ZDQzNDQ2NDMtYWQ4NC00YzMwLThhMmEtYWNmYTY2N2QyZWU4";

const configuration = OneSignal.createConfiguration({
  userKey: _OnesignalUserAuthKey_,
  appKey: _OnesignalRestApiKey_,
});

const onesignal = new OneSignal.DefaultApi(configuration);

serve(async (req) => {
  try {
    const { record } = await req.json();

    // Build OneSignal notification object
    const notification = new OneSignal.Notification();
    notification.app_id = _OnesignalAppId_;
    notification.title = "RFID Access";
    notification.username = record.username;
    notification.code = record.code;
    notification.result = record.Result;
    notification.time = record.created_at;
    const onesignalApiRes = await onesignal.createNotification(notification);

    return new Response(
      JSON.stringify({ onesignalResponse: onesignalApiRes }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("Failed to create OneSignal notification", err);
    return new Response("Server error.", {
      headers: { "Content-Type": "application/json" },
      status: 400,
    });
  }
});
