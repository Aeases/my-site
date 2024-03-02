import { excalidrawToSvg } from '@/lib/excalidraw-to-svg/excalidraw-to-svg';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
	const posts = await getCollection('blog');
	// return [ {params: {slug: 'test'}}, ];
	//
	let readyPosts = posts.filter((p) => p.data.tags && p.data.tags.includes("excalidraw"))
	let finalPosts = []
	for (let post of readyPosts) {
			let {scene, pos} = await getJSON(post.body);
			let svgEle: SVGSVGElement = await excalidrawToSvg(scene)
			console.log(svgEle.innerHTML)
			let svgString: string = svgEle.outerHTML
			if (!svgEle.innerHTML) {
				svgString = "Failed Conversion"
			} else {console.log(svgString)}
			
			finalPosts.push({ params: {slug: post.slug }, props: {svgString: svgString} })
		}
	return finalPosts

		// .map((post) => {
		// 	let {scene} = getJSON(post.body);
		// 	console.log(scene)
		//
		// 	let svg: SVGSVGElement = await excalidrawToSvg(scene)
		// 	let svgString: string = String(svg)
		// 	if (!svg) { svgString = "Conversion Failure" };
		//
		// 	return({ params: { slug: post.slug}, props: {svgString: svgString}});
		// });

	// readyPosts.forEach(async(e) => {
	// 	let 
	// 	e.props.scene = String(svg);
	// })
	return await readyPosts


}
export const GET: APIRoute = ({params, props}) => {

  let res = new Response(props.svgString)
  res.headers.set("content-type", "image/svg+xml")
  res.headers.delete("Transfer-Encoding")
  return res
	// let stringScene = JSON.stringify(props.scene)
	// console.log(stringScene) 
	// return new Response(props.scene)
}

const DRAWING_REG = /\n# Drawing\n[^`]*(```json\n)([\s\S]*?)```\n/gm; //https://github.com/zsviczian/obsidian-excalidraw-plugin/issues/182
const DRAWING_REG_FALLBACK = /\n# Drawing\n(```json\n)?(.*)(```)?(%%)?/gm;
export const DRAWING_COMPRESSED_REG =
  /(\n# Drawing\n[^`]*(?:```compressed\-json\n))([\s\S]*?)(```\n)/gm; //https://github.com/zsviczian/obsidian-excalidraw-plugin/issues/182
const DRAWING_COMPRESSED_REG_FALLBACK =
  /(\n# Drawing\n(?:```compressed\-json\n)?)(.*)((```)?(%%)?)/gm;
export const REG_LINKINDEX_HYPERLINK = /^\w+:\/\//;

const isCompressedMD = (data: string): boolean => {
  return data.match(/```compressed\-json\n/gm) !== null;
};

declare var LZString: any;
export const decompress = (data: string): string => {
  return LZString.decompressFromBase64(data.replaceAll("\n", "").replaceAll("\r", ""));
};

const getDecompressedScene = (
  data: string,
): [string, IteratorResult<RegExpMatchArray, any>] => {
  let res = data.matchAll(DRAWING_COMPRESSED_REG);

  //In case the user adds a text element with the contents "# Drawing\n"
  let parts;
  parts = res.next();
  if (parts.done) {
    //did not find a match
    res = data.matchAll(DRAWING_COMPRESSED_REG_FALLBACK);
    parts = res.next();
  }
  if (parts.value && parts.value.length > 1) {
    return [decompress(parts.value[2]), parts];
  }
  return [null, parts];
};
export function getJSON(data: string): { scene: string; pos: number } {
  let res;
  if (isCompressedMD(data)) {
    const [result, parts] = getDecompressedScene(data);
    if (result) {
      return {
        scene: result.substring(0, result.lastIndexOf("}") + 1),
        pos: parts.value.index,
      }; //this is a workaround in case sync merges two files together and one version is still an old version without the ```codeblock
    }
    return { scene: data, pos: parts.value ? parts.value.index : 0 };
  }
  res = data.matchAll(DRAWING_REG);

  //In case the user adds a text element with the contents "# Drawing\n"
  let parts;
  parts = res.next();
  if (parts.done) {
    //did not find a match
    res = data.matchAll(DRAWING_REG_FALLBACK);
    parts = res.next();
  }
  if (parts.value && parts.value.length > 1) {
    const result = parts.value[2];
    return {
      scene: result.substr(0, result.lastIndexOf("}") + 1),
      pos: parts.value.index,
    }; //this is a workaround in case sync merges two files together and one version is still an old version without the ```codeblock
  }
  return { scene: data, pos: parts.value ? parts.value.index : 0 };
}

const plaintextSVG = `
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 234 234" width="234" height="234" data-astro-source-file="/home/aeases/Dev/my-site/frontend/src/layouts/BlogPost.astro" data-astro-source-loc="24:103"><!-- svg-source:excalidraw --><defs data-astro-source-file="/home/aeases/Dev/my-site/frontend/src/layouts/BlogPost.astro" data-astro-source-loc="27:9"><style>
				@font-face {
					font-family: "Virgil";
					src: url("https://excalidraw.com/Virgil.woff2");
				}
				@font-face {
					font-family: "Cascadia";
					src: url("https://excalidraw.com/Cascadia.woff2");
				}
			</style></defs><rect x="0" y="0" width="234" height="234" fill="#ffffff" data-astro-source-file="/home/aeases/Dev/my-site/frontend/src/layouts/BlogPost.astro" data-astro-source-loc="39:4"/><g stroke-linecap="round" transform="translate(10 10) rotate(0 107 107)" data-astro-source-file="/home/aeases/Dev/my-site/frontend/src/layouts/BlogPost.astro" data-astro-source-loc="39:142"><path d="M17.1 49.31 C17.1 49.31, 17.1 49.31, 17.1 49.31 M17.1 49.31 C17.1 49.31, 17.1 49.31, 17.1 49.31 M12.68 61.42 C24.9 45.95, 34.84 35.35, 46.89 21.25 M13.74 59.41 C25.69 46.93, 37.71 32.95, 46.42 22.69 M7.07 72.17 C20.3 58.53, 31.72 44.51, 55.28 19.45 M8.41 72.1 C19.32 60.52, 29.87 47.48, 56.05 16.82 M4.61 82.77 C20.61 64.41, 36.34 49.01, 64.57 15.81 M3.67 83.34 C22.7 60.75, 42.02 38.62, 63.05 13.69 M6.42 84.99 C19.14 68.58, 33.15 53.89, 71.72 8.97 M5.69 85.85 C21.39 66.89, 38.29 48.29, 72.76 10.09 M5.42 94.36 C28.77 65.83, 51.96 40.37, 81.37 6.23 M5.61 93.01 C33.22 62.76, 59.82 31.11, 82.07 3.69 M6.67 100.47 C23.81 78.6, 44.14 55.35, 89.64 5.57 M5.58 99.41 C32 66.74, 59.45 36.37, 88.83 3.45 M5.93 107.58 C21.87 82.86, 43.05 62.24, 91.35 5.07 M4.92 105.94 C22.94 84.79, 40.61 63.6, 92.65 3.36 M3.87 111.59 C43.03 72.36, 79.54 28.09, 100.51 4.71 M3.96 113.11 C41.29 70.9, 76.38 29.58, 99.08 4.68 M5.62 120.57 C38.59 82.48, 70.72 41.99, 103.87 4.63 M5.22 119.88 C25.08 93.7, 47.96 68.66, 104.79 2.53 M4.38 127.23 C37.54 86.83, 70.16 51.17, 111.85 1.87 M2.62 126.61 C32.64 93.18, 60 58.61, 110.02 3.04 M6.28 131.39 C36.06 97.49, 62.04 62.93, 114.07 2.88 M6 129.85 C37.77 91.13, 70.31 54.95, 115.86 2.17 M4.76 135.07 C43.3 91.42, 80.92 51.75, 119.64 3.25 M7.08 133.83 C35.84 100.87, 64.85 67.09, 122.09 1.9 M8.69 141.19 C46.15 95.53, 81.73 53.71, 124.06 4.96 M7.28 139.49 C47.1 95.48, 87.29 49.54, 125.76 3.81 M10.66 145.27 C42.07 108.05, 74.7 71.92, 128.82 4.4 M9.54 142.6 C51.37 93.69, 94.78 44.82, 130.33 5.46 M11.27 147.77 C57.52 91.66, 106.41 38.6, 132.24 5.59 M10.3 148.47 C34.93 118.26, 61.62 90.05, 134.24 6.03 M13.97 150.79 C51.59 108, 90.52 65.57, 139.19 6.96 M11.97 150.98 C39.78 121.42, 65.05 92.23, 138.16 7.45 M12.06 155.32 C41.95 121.19, 74.97 84.87, 143.9 10.11 M13.5 156.29 C61.15 103.06, 107.42 49.81, 143.49 9.49 M14.89 162.63 C59.47 110.52, 107.37 57.3, 145.72 8.4 M14.31 160.73 C65.45 103.06, 116.47 45.16, 147.53 10.57 M19.82 162.77 C67.83 110.1, 115.95 52.39, 151.88 10.85 M17.79 164.46 C50.14 125.24, 82.85 87.63, 150.95 11.18 M19.83 167.16 C69.11 111.23, 120.63 54.21, 154.51 12.01 M19.99 167.51 C55.99 125.65, 93.9 84.08, 155.76 13.63 M21.95 169.2 C75.89 110.92, 127.8 49.66, 159.8 15.01 M23.24 170.66 C61.73 126.35, 100.81 82.29, 159.92 14.64 M26.68 173.28 C71.66 121.27, 115.96 69.65, 160.75 15.42 M26 174.28 C57.98 135.17, 91.76 98.67, 162.03 16.36 M30.06 177.8 C59.7 139.4, 91.76 105.25, 166.29 17.84 M27.96 175.93 C63.76 136.36, 99.98 95.61, 165.15 18.4 M32.8 180.96 C63.47 142.27, 95.62 104.76, 170.08 21.88 M31.8 180.03 C59.92 145.33, 89.24 111.81, 168.34 20.1 M35.12 181.66 C81.29 126.41, 130.88 71.68, 173.7 23.05 M34.15 181.37 C82.98 127.06, 131.55 69.87, 171.8 23.53 M35.26 185.21 C74.37 144.13, 112.22 98.84, 173.64 26.14 M36.15 185.34 C79.16 134.79, 124.34 82.93, 174.17 25.98 M38.47 186.57 C83.69 133.17, 131.75 81.61, 176.31 30.08 M39.76 187.91 C87.32 133.68, 135.54 78.82, 178.33 28.15 M41.39 190.21 C85.82 142.85, 127.88 92.33, 180.58 31.33 M42.39 190.6 C78.14 148.99, 115.26 106.58, 180.73 30.72 M45.27 192.58 C79.09 155.23, 113.69 117.26, 185.09 34.17 M46.22 193.8 C95.64 136.91, 144.35 80.09, 183.6 34.48 M49.57 196.43 C96.67 136.21, 148.3 78.85, 189.12 35.65 M49.79 195.57 C93.45 142.18, 139.49 90.68, 188.49 36.14 M53.29 198.32 C92.93 150.18, 136.7 99.94, 190.16 38.96 M52.46 197.11 C97.37 145.28, 141.6 95.32, 189.94 38.53 M56.76 201.16 C99.54 151.21, 144.54 97.24, 193.87 43.14 M55.87 199.81 C106.77 142.87, 158.3 85.69, 192.18 42.38 M60.9 200.45 C93.8 162.39, 126.52 125.23, 195.01 47.67 M59.38 202.33 C107.09 148.1, 153.56 93.36, 195.03 45.96 M63.55 202.72 C96.62 163.94, 128.29 126.47, 197.2 51.16 M63.11 203.48 C96.32 165.36, 129.73 127.8, 197.45 49.44 M65.82 204.58 C106.47 159.71, 147.7 115.25, 198.74 54.51 M66.9 204.64 C108.59 154.06, 152.19 106.32, 198.85 52.99 M71.89 207.46 C110.43 163.41, 146.7 119.64, 202.24 58.78 M71.41 207.07 C118.23 151.33, 167.56 94.6, 201.33 56.59 M74.18 210.23 C104.01 173.18, 136.82 137.99, 202.55 61.14 M73.98 208.42 C114.19 163.55, 154.69 116.17, 203.11 60.98 M75.58 213.17 C116.06 165.94, 159.44 117.98, 206.18 64.24 M77.88 210.87 C125.03 156.89, 172.91 101.9, 205.54 64.46 M82.42 213.53 C127.09 161.42, 173.21 110.04, 205.95 68.91 M82.09 211.16 C129.8 160.08, 173.97 108.08, 207.38 68.7 M88.63 214.22 C125.22 167.71, 163.85 123.31, 210.44 72.66 M87.34 211.68 C116.02 179.95, 143.58 147.94, 209.9 71.31 M90.59 212.07 C121.15 179.88, 150.07 150.04, 209.69 76.38 M92.51 213.03 C129.76 172.66, 165.61 129.88, 210.12 77.07 M97.42 211.76 C122.46 186.86, 148.01 158.6, 209.34 81.86 M96.58 212.43 C133.45 171.66, 168.91 132.24, 210.67 81.7 M103.21 213.65 C124.21 186.42, 148.91 157.18, 211.58 86.77 M102.46 213.84 C140.25 168.78, 179.43 124, 212.33 87.31 M106.61 214.25 C132.43 183.98, 156.7 155.14, 211.46 92.98 M106.23 214.84 C145.87 169.8, 184.92 124.25, 211.94 92.99 M109.72 214.95 C144.53 177.03, 174.56 141.58, 213.71 96.95 M111.65 215.72 C143.75 179.52, 174.05 145.35, 212.88 99.69 M117.77 215.06 C147.24 180.65, 178.4 142.36, 215.03 103.82 M115.41 216.92 C151.31 177.91, 183.78 138.8, 213.01 104.59 M122.5 215.25 C152.96 182.54, 181.93 148.94, 213.76 110.14 M122.25 214.82 C151.63 180.46, 182.19 145.92, 213.84 110.28 M127.38 214.14 C158.33 177, 188.83 145.53, 210.65 118.33 M129.69 212.73 C157.2 179.73, 185.06 146.49, 211.09 117.54 M134.25 211.97 C159.5 187.14, 180.02 162.2, 208.49 125.22 M136.35 210.9 C162.26 179.9, 190.37 147.46, 209.84 126.27 M143.69 210.88 C165.05 187.32, 182.91 161.9, 209.76 132.78 M141.97 209.2 C161.23 189.73, 178.78 168.89, 207.83 134.62 M149.29 208.91 C161.07 193.12, 175 180.97, 206.13 142.4 M149.23 209.51 C172.2 182.48, 194.7 156.11, 206.61 141.59 M154.49 206.5 C171.23 190.66, 186.42 170.14, 207.44 149.83 M156.28 206.55 C166.77 196.08, 176.75 182.97, 206.07 148.43 M171.46 195.19 C176.57 190.03, 183.16 183.95, 193.41 167.35 M169.21 196.97 C176.78 188.8, 185.26 179.19, 193.9 167.08" stroke="#15aabf" stroke-width="0.5" fill="none" data-astro-source-file="/home/aeases/Dev/my-site/frontend/src/layouts/BlogPost.astro" data-astro-source-loc="39:142"/><path d="M80.92 3.26 C92.48 -1.26, 106.89 -0.46, 119.75 1.09 C132.61 2.64, 146.75 6.67, 158.09 12.55 C169.43 18.44, 179.44 26.76, 187.79 36.41 C196.14 46.05, 203.99 58.25, 208.19 70.44 C212.39 82.64, 213.52 96.64, 213 109.57 C212.49 122.51, 209.77 136.01, 205.09 148.05 C200.42 160.1, 193.65 172.36, 184.96 181.83 C176.26 191.3, 164.89 199.62, 152.93 204.87 C140.97 210.13, 126.1 212.55, 113.2 213.37 C100.3 214.19, 87.57 213.57, 75.56 209.8 C63.54 206.03, 51.38 198.97, 41.11 190.73 C30.84 182.48, 20.66 171.5, 13.94 160.34 C7.23 149.18, 2.63 136.46, 0.84 123.74 C-0.95 111.02, 0.48 96.44, 3.2 84.02 C5.92 71.6, 10.37 60.02, 17.18 49.22 C23.99 38.43, 32.35 27.23, 44.07 19.25 C55.79 11.27, 79.22 4.09, 87.51 1.35 C95.8 -1.4, 93.53 0.95, 93.82 2.78 M148.52 8.63 C160.7 11.9, 172.42 20.91, 181.77 29.81 C191.12 38.71, 199.36 50.25, 204.63 62.03 C209.9 73.81, 212.43 87.86, 213.39 100.49 C214.34 113.11, 213.99 125.51, 210.37 137.77 C206.75 150.03, 199.83 163.62, 191.67 174.06 C183.51 184.51, 172.54 194.11, 161.41 200.46 C150.29 206.8, 137.72 210.14, 124.92 212.13 C112.11 214.11, 97.46 215.16, 84.58 212.38 C71.71 209.61, 58.1 202.35, 47.65 195.47 C37.2 188.59, 29.44 181.23, 21.91 171.13 C14.39 161.02, 6.02 147.54, 2.5 134.86 C-1.01 122.18, -1.04 107.89, 0.81 95.04 C2.66 82.19, 7.5 69.15, 13.6 57.78 C19.7 46.42, 27.81 35.4, 37.4 26.84 C47 18.27, 59.04 10.68, 71.16 6.41 C83.28 2.15, 97.17 1.02, 110.11 1.23 C123.06 1.44, 142.59 6.22, 148.83 7.67 C155.07 9.12, 148.3 8.03, 147.54 9.93" stroke="#000000" stroke-width="1" fill="none" data-astro-source-file="/home/aeases/Dev/my-site/frontend/src/layouts/BlogPost.astro" data-astro-source-loc="39:6120"/></g><script xmlns="" id="bw-fido2-page-script"/></svg>
`
