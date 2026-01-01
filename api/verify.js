export default function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  const { key, userid } = req.body;

  // 🔑 YOUR LICENSE KEYS — add/remove as needed
  const LICENSES = {
    "ABC-123-ROBLOX": true,
    "DEV-456-LICENSE": true,
    "OWNER-999-KEY": true
  };

  if (LICENSES[key]) {
    return res.status(200).json({ success: true, user: userid });
  }

  return res.status(401).json({ success: false, message: "Invalid license key" });
}
