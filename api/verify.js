export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false });
  }

  const { key, userid } = req.body;

  // 🔑 Your Roblox license keys
  const LICENSES = {
    "ABC-123-ROBLOX": true,
    "DEV-456-LICENSE": true,
    "OWNER-999-KEY": true
  };

  if (LICENSES[key]) {
    return res.status(200).json({ success: true, user: userid });
  }

  return res.status(401).json({ success: false });
}
