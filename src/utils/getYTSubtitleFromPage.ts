export const getYTSubtitleFromPage = async (ytlink) => {
  const videoId = new URL(ytlink).searchParams.get("v");
  if (!videoId) {
    console.error("Video ID not found");
    return;
  }

  // Fetch the video page content
  const response = await fetch(`https://www.youtube.com/watch?v=${videoId}`);
  const text = await response.text();

  // const html = document.body.innerHTML;
  // const text = html;

  // Parse the player response to extract captions
  const playerResponsePattern = /ytInitialPlayerResponse\s*=\s*({.*?});/;
  const match = playerResponsePattern.exec(text);
  if (!match) {
    console.error("Player response not found");
    return;
  }

  const playerResponse = JSON.parse(match[1]);

  // Extract title and description
  const videoDetails = playerResponse.videoDetails;
  const title = videoDetails?.title;
  const description = videoDetails?.shortDescription;

  const captionTracks =
    playerResponse.captions?.playerCaptionsTracklistRenderer?.captionTracks;
  if (!captionTracks || captionTracks.length === 0) {
    console.error("No caption tracks found");
    return;
  }

  // Fetch the first caption track
  const subtitleUrl = captionTracks[0].baseUrl;
  const subtitlesResponse = await fetch(subtitleUrl);
  const subtitlesText = await subtitlesResponse.text();

  // Parse and display subtitles
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(subtitlesText, "application/xml");
  const texts = xmlDoc.getElementsByTagName("text");

  const subtitles = Array.from(texts)
    .map((node) => node.textContent)
    .join("\n");
  return { subtitles, title, description };
};
