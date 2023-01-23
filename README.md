# Streamer Mode for YouTube

Streamer Mode for YouTube blurs personal data and recommendations from YouTube to prevent leaking your data - similar to Discord's Streamer Mode.

This includes:

- Recommendations on the homepage
- Subscriptions in the sidebar
- Playlists in the sidebar
- Recommendations at the end of videos, including on embedded YouTube videos on other pages
- Recommendations to the right of videos
- Autoplaying video thumbnail at the end of the video (⚠️ Autoplay will still be enabled, you should disable it separately)
- Search history
- Trending page and other pages that might contain personalized recommendations
- Watch history page

This can be useful for:

- Opening YouTube on streams
- Opening YouTube in school or work presentations
- Opening YouTube in a public place

where you don't want to leak your recommendations or search history.

The streamer mode can be easily turned on and off using the added shield icon in the top right of the page. The status of streamer mode will be synced across all your tabs.

This extension does **not**:

- Disable autoplay (which potentially uses recommended videos), you should do that separately
- Disable clicking on the blurred content
- Hide account details of the currently logged in account like your YouTube handle, profile picture or comments that you wrote
- Hide if you are subscribed to a channel or not, e.g. in the search results or below videos
- Hide the number of views, likes, dislikes, comments, etc. of a video
- Hide ads that may be personalized
- Guarantee that other search results (outside of the history items) are not personalized in some way
- Guarantee that there might not be a short flash of the blurred content before it is blurred

Found content that doesn't get blurred or is not blurred correctly? Please open an issue on GitHub.

## Development

First, run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.

For further guidance, [visit our Documentation](https://docs.plasmo.com/)

### Making production build

Run the following:

```bash
pnpm build
# or
npm run build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.

## License

This project is licensed under MIT.
