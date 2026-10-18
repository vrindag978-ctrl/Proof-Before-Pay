exports.handler = async (event) => {
  // Allow requests from the website
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS"
      },
      body: ""
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Use POST for this request." })
    };
  }

  try {
    const { url } = JSON.parse(event.body || "{}");

    if (!url || !/^https?:\/\//i.test(url)) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Please enter a valid URL beginning with http:// or https://"
        })
      };
    }

    const apiKey = process.env.TINYFISH_API_KEY;

    if (!apiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "TinyFish API key is not configured on the server."
        })
      };
    }

    const response = await fetch(
      "https://agent.tinyfish.ai/v1/automation/run",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": apiKey
        },
        body: JSON.stringify({
          url,
          goal: "Inspect this website for warning signs relevant to online scams. Look for suspicious claims, requests for upfront payments, impersonation, missing company details, and signs that the website may be misleading. Report observable evidence and uncertainty. Do not claim that the site is safe merely because no warning signs are found.",
          browser_profile: "lite",
          "api_integration": "direct"
        })
      }
    );

    const result = await response.text();

    return {
      statusCode: response.ok ? 200 : response.status,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        success: response.ok,
        result: result
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        error: "The website check could not be completed. Please try again."
      })
    };
  }
};
