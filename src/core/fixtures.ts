import type { BioData, Collection, PhotoItem } from "./types";

export const PRYCE_BIO: BioData = {
  "name": "Pryce Tharpe",
  "portraitUrl": "/bio-portrait.jpg",
  "tagline": "Photography",
  "location": "Midwest, USA",
  "camera": "Sony Alpha 7C",
  "bioParagraphs": [
    "When I was younger, art was a big part of my life. Most of all, I loved to draw. I would draw what I saw, and eventually started working from photos I liked. After a while, I realized how much I loved the art behind the image itself. I started shooting in middle school on a Pixel 2 Pro, which I got just for the sake of starting photography. In high school I took it further. I took a few classes and got my first real camera, a Nikon D3500. Then it kept growing and truly became a passion.",
    "In college I started traveling more, and photography became how I process each trip. I shoot it all, but it always comes back to travel. Every place has a rhythm to it, and I like trying to catch a piece of that. I shoot on a Sony A7C now and bring it pretty much everywhere.",
    "Photography is how I see the world. It's a way to share my perspective and hold onto moments that matter to me. A lot of what I shoot doesn't get posted, so I made this site to share the work properly. If you want to see more as it happens, Instagram is the best place — it's more of a time capsule for me, where I process the memories."
  ],
  "socials": [
    {
      "label": "Instagram (@pryce_tharpe)",
      "url": "https://www.instagram.com/pryce_tharpe/"
    },
    {
      "label": "Engineering Portfolio",
      "url": "https://pryce-tharpe.dev"
    },
    {
      "label": "GitHub",
      "url": "https://github.com/tharpep"
    },
    {
      "label": "Email",
      "url": "mailto:tharpep_pro@outlook.com"
    }
  ]
};

export const SAMPLE_COLLECTIONS: Collection[] = [
  {
    "id": "denver",
    "slug": "denver",
    "title": "Denver",
    "description": "",
    "location": "Denver & Rocky Mountains, CO",
    "camera": "Sony Alpha 7C",
    "year": "2023",
    "photoCount": 20,
    "coverUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_1000/DSC05453-2_zfixpm"
  },
  {
    "id": "grenada",
    "slug": "grenada",
    "title": "Grenada",
    "description": "",
    "location": "Grenada, West Indies",
    "camera": "Sony Alpha 7C",
    "year": "2024",
    "photoCount": 14,
    "coverUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_1000/DSC_0981-2_znttqr"
  },
  {
    "id": "japan",
    "slug": "japan",
    "title": "Japan",
    "description": "",
    "location": "Tokyo, Kamakura & Kyoto, Japan",
    "camera": "Sony Alpha 7C",
    "year": "2023",
    "photoCount": 37,
    "coverUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_1000/DSC07386_fez5mn"
  },
  {
    "id": "new-york-city",
    "slug": "new-york-city",
    "title": "New York City",
    "description": "",
    "location": "New York City, NY",
    "camera": "Sony Alpha 7C",
    "year": "2022",
    "photoCount": 17,
    "coverUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_1000/DSC02093_qfk6cc"
  },
  {
    "id": "toronto",
    "slug": "toronto",
    "title": "Toronto",
    "description": "",
    "location": "Toronto, Canada",
    "camera": "Sony Alpha 7C",
    "year": "2023",
    "photoCount": 16,
    "coverUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_1000/DSC_0887_gpc9pg"
  },
  {
    "id": "wildlife",
    "slug": "wildlife",
    "title": "Wildlife",
    "description": "",
    "location": "Wildlife Sanctuary",
    "camera": "Sony Alpha 7C",
    "year": "2021—2024",
    "photoCount": 16,
    "coverUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_1000/DSC05262-Enhanced-NR_vi1wfl"
  }
];

export const SAMPLE_PHOTOS: PhotoItem[] = [
  {
    "id": "denver-01",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC05480-Enhanced-SR-2_hpnxxj",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC05480-Enhanced-SR-2_hpnxxj",
    "title": "Denver · Frame 01",
    "collectionSlug": "denver",
    "collectionTitle": "Denver",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2023",
    "location": "Denver & Rocky Mountains, CO",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "denver-02",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC05191_wvsq9k",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC05191_wvsq9k",
    "title": "Denver · Frame 02",
    "collectionSlug": "denver",
    "collectionTitle": "Denver",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2023",
    "location": "Denver & Rocky Mountains, CO",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "denver-03",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC05024_zxuj6f",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC05024_zxuj6f",
    "title": "Denver · Frame 03",
    "collectionSlug": "denver",
    "collectionTitle": "Denver",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2023",
    "location": "Denver & Rocky Mountains, CO",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "denver-04",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC05033_cxmkr0",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC05033_cxmkr0",
    "title": "Denver · Frame 04",
    "collectionSlug": "denver",
    "collectionTitle": "Denver",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2023",
    "location": "Denver & Rocky Mountains, CO",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "denver-05",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC04771_imfuf1",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC04771_imfuf1",
    "title": "Denver · Frame 05",
    "collectionSlug": "denver",
    "collectionTitle": "Denver",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2023",
    "location": "Denver & Rocky Mountains, CO",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "denver-06",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC04679_v6zo6i",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC04679_v6zo6i",
    "title": "Denver · Frame 06",
    "collectionSlug": "denver",
    "collectionTitle": "Denver",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2023",
    "location": "Denver & Rocky Mountains, CO",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "denver-07",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC05453-2_zfixpm",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC05453-2_zfixpm",
    "title": "Denver · Frame 07",
    "collectionSlug": "denver",
    "collectionTitle": "Denver",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2023",
    "location": "Denver & Rocky Mountains, CO",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "denver-08",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC05168_drcxv5",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC05168_drcxv5",
    "title": "Denver · Frame 08",
    "collectionSlug": "denver",
    "collectionTitle": "Denver",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2023",
    "location": "Denver & Rocky Mountains, CO",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "denver-09",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC05145_ivxasa",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC05145_ivxasa",
    "title": "Denver · Frame 09",
    "collectionSlug": "denver",
    "collectionTitle": "Denver",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2023",
    "location": "Denver & Rocky Mountains, CO",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "denver-10",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC05016_i0yk4s",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC05016_i0yk4s",
    "title": "Denver · Frame 10",
    "collectionSlug": "denver",
    "collectionTitle": "Denver",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2023",
    "location": "Denver & Rocky Mountains, CO",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "denver-11",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC04770_flsfmd",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC04770_flsfmd",
    "title": "Denver · Frame 11",
    "collectionSlug": "denver",
    "collectionTitle": "Denver",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2023",
    "location": "Denver & Rocky Mountains, CO",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "denver-12",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/IMG_8163-Enhanced-NR_yfqb7p",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/IMG_8163-Enhanced-NR_yfqb7p",
    "title": "Denver · Frame 12",
    "collectionSlug": "denver",
    "collectionTitle": "Denver",
    "aspectRatio": 0.75,
    "width": 1536,
    "height": 2048,
    "year": "2023",
    "location": "Denver & Rocky Mountains, CO",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "denver-13",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC05410-Enhanced-SR_vnpybn",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC05410-Enhanced-SR_vnpybn",
    "title": "Denver · Frame 13",
    "collectionSlug": "denver",
    "collectionTitle": "Denver",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2023",
    "location": "Denver & Rocky Mountains, CO",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "denver-14",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC05338_p040it",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC05338_p040it",
    "title": "Denver · Frame 14",
    "collectionSlug": "denver",
    "collectionTitle": "Denver",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2023",
    "location": "Denver & Rocky Mountains, CO",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "denver-15",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC05038_kdytzh",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC05038_kdytzh",
    "title": "Denver · Frame 15",
    "collectionSlug": "denver",
    "collectionTitle": "Denver",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2023",
    "location": "Denver & Rocky Mountains, CO",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "denver-16",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC04968_w3moiw",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC04968_w3moiw",
    "title": "Denver · Frame 16",
    "collectionSlug": "denver",
    "collectionTitle": "Denver",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2023",
    "location": "Denver & Rocky Mountains, CO",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "denver-17",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC04871_rlcixc",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC04871_rlcixc",
    "title": "Denver · Frame 17",
    "collectionSlug": "denver",
    "collectionTitle": "Denver",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2023",
    "location": "Denver & Rocky Mountains, CO",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "denver-18",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC04851_uas7c6",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC04851_uas7c6",
    "title": "Denver · Frame 18",
    "collectionSlug": "denver",
    "collectionTitle": "Denver",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2023",
    "location": "Denver & Rocky Mountains, CO",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "denver-19",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC04723_uyqk3a",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC04723_uyqk3a",
    "title": "Denver · Frame 19",
    "collectionSlug": "denver",
    "collectionTitle": "Denver",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2023",
    "location": "Denver & Rocky Mountains, CO",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "denver-20",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/IMG_7868_nercf6",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/IMG_7868_nercf6",
    "title": "Denver · Frame 20",
    "collectionSlug": "denver",
    "collectionTitle": "Denver",
    "aspectRatio": 0.75,
    "width": 1536,
    "height": 2048,
    "year": "2023",
    "location": "Denver & Rocky Mountains, CO",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "grenada-01",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC_0981-2_znttqr",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC_0981-2_znttqr",
    "title": "Grenada · Frame 01",
    "collectionSlug": "grenada",
    "collectionTitle": "Grenada",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2024",
    "location": "Grenada, West Indies",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "grenada-02",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC_0344-2_oazzfm",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC_0344-2_oazzfm",
    "title": "Grenada · Frame 02",
    "collectionSlug": "grenada",
    "collectionTitle": "Grenada",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2024",
    "location": "Grenada, West Indies",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "grenada-03",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC_0084-2_sihgwo",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC_0084-2_sihgwo",
    "title": "Grenada · Frame 03",
    "collectionSlug": "grenada",
    "collectionTitle": "Grenada",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2024",
    "location": "Grenada, West Indies",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "grenada-04",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC_0293_wbz8yp",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC_0293_wbz8yp",
    "title": "Grenada · Frame 04",
    "collectionSlug": "grenada",
    "collectionTitle": "Grenada",
    "aspectRatio": 0.67,
    "width": 2560,
    "height": 3840,
    "year": "2024",
    "location": "Grenada, West Indies",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "grenada-05",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC_0968-2_mrkhsf",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC_0968-2_mrkhsf",
    "title": "Grenada · Frame 05",
    "collectionSlug": "grenada",
    "collectionTitle": "Grenada",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2024",
    "location": "Grenada, West Indies",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "grenada-06",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC_0391_wpabnw",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC_0391_wpabnw",
    "title": "Grenada · Frame 06",
    "collectionSlug": "grenada",
    "collectionTitle": "Grenada",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2024",
    "location": "Grenada, West Indies",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "grenada-07",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC_0352-2_mgsw7z",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC_0352-2_mgsw7z",
    "title": "Grenada · Frame 07",
    "collectionSlug": "grenada",
    "collectionTitle": "Grenada",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2024",
    "location": "Grenada, West Indies",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "grenada-08",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC_0309-2_zuyi1k",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC_0309-2_zuyi1k",
    "title": "Grenada · Frame 08",
    "collectionSlug": "grenada",
    "collectionTitle": "Grenada",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2024",
    "location": "Grenada, West Indies",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "grenada-09",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/IMG_9007-2_c1ciut",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/IMG_9007-2_c1ciut",
    "title": "Grenada · Frame 09",
    "collectionSlug": "grenada",
    "collectionTitle": "Grenada",
    "aspectRatio": 0.75,
    "width": 1535,
    "height": 2048,
    "year": "2024",
    "location": "Grenada, West Indies",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "grenada-10",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC_0974_kybmhv",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC_0974_kybmhv",
    "title": "Grenada · Frame 10",
    "collectionSlug": "grenada",
    "collectionTitle": "Grenada",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2024",
    "location": "Grenada, West Indies",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "grenada-11",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC_0382_zplxti",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC_0382_zplxti",
    "title": "Grenada · Frame 11",
    "collectionSlug": "grenada",
    "collectionTitle": "Grenada",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2024",
    "location": "Grenada, West Indies",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "grenada-12",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC_0355_nsmvfo",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC_0355_nsmvfo",
    "title": "Grenada · Frame 12",
    "collectionSlug": "grenada",
    "collectionTitle": "Grenada",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2024",
    "location": "Grenada, West Indies",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "grenada-13",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC_0292_vofavh",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC_0292_vofavh",
    "title": "Grenada · Frame 13",
    "collectionSlug": "grenada",
    "collectionTitle": "Grenada",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2024",
    "location": "Grenada, West Indies",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "grenada-14",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/IMG_8574_kaezsk",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/IMG_8574_kaezsk",
    "title": "Grenada · Frame 14",
    "collectionSlug": "grenada",
    "collectionTitle": "Grenada",
    "aspectRatio": 0.75,
    "width": 1170,
    "height": 1561,
    "year": "2024",
    "location": "Grenada, West Indies",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "japan-01",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC07386_fez5mn",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC07386_fez5mn",
    "title": "Japan · Frame 01",
    "collectionSlug": "japan",
    "collectionTitle": "Japan",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2023",
    "location": "Tokyo, Kamakura & Kyoto, Japan",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "japan-02",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC06877_ay2ihh",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC06877_ay2ihh",
    "title": "Japan · Frame 02",
    "collectionSlug": "japan",
    "collectionTitle": "Japan",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2023",
    "location": "Tokyo, Kamakura & Kyoto, Japan",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "japan-03",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC06858_c9fsfs",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC06858_c9fsfs",
    "title": "Japan · Frame 03",
    "collectionSlug": "japan",
    "collectionTitle": "Japan",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2023",
    "location": "Tokyo, Kamakura & Kyoto, Japan",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "japan-04",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC07192_rrpsc8",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC07192_rrpsc8",
    "title": "Japan · Frame 04",
    "collectionSlug": "japan",
    "collectionTitle": "Japan",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2023",
    "location": "Tokyo, Kamakura & Kyoto, Japan",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "japan-05",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC06749_op9c2p",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC06749_op9c2p",
    "title": "Japan · Frame 05",
    "collectionSlug": "japan",
    "collectionTitle": "Japan",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2023",
    "location": "Tokyo, Kamakura & Kyoto, Japan",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "japan-06",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC07357_tpbc9x",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC07357_tpbc9x",
    "title": "Japan · Frame 06",
    "collectionSlug": "japan",
    "collectionTitle": "Japan",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2023",
    "location": "Tokyo, Kamakura & Kyoto, Japan",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "japan-07",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC07361_hoyden",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC07361_hoyden",
    "title": "Japan · Frame 07",
    "collectionSlug": "japan",
    "collectionTitle": "Japan",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2023",
    "location": "Tokyo, Kamakura & Kyoto, Japan",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "japan-08",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC07463_yem3y5",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC07463_yem3y5",
    "title": "Japan · Frame 08",
    "collectionSlug": "japan",
    "collectionTitle": "Japan",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2023",
    "location": "Tokyo, Kamakura & Kyoto, Japan",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "japan-09",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC07532_dlcjhn",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC07532_dlcjhn",
    "title": "Japan · Frame 09",
    "collectionSlug": "japan",
    "collectionTitle": "Japan",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2023",
    "location": "Tokyo, Kamakura & Kyoto, Japan",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "japan-10",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC07540_dm23b4",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC07540_dm23b4",
    "title": "Japan · Frame 10",
    "collectionSlug": "japan",
    "collectionTitle": "Japan",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2023",
    "location": "Tokyo, Kamakura & Kyoto, Japan",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "japan-11",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC07576_hovioi",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC07576_hovioi",
    "title": "Japan · Frame 11",
    "collectionSlug": "japan",
    "collectionTitle": "Japan",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2023",
    "location": "Tokyo, Kamakura & Kyoto, Japan",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "japan-12",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC07276_ysins4",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC07276_ysins4",
    "title": "Japan · Frame 12",
    "collectionSlug": "japan",
    "collectionTitle": "Japan",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2023",
    "location": "Tokyo, Kamakura & Kyoto, Japan",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "japan-13",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC07545_pn7ydh",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC07545_pn7ydh",
    "title": "Japan · Frame 13",
    "collectionSlug": "japan",
    "collectionTitle": "Japan",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2023",
    "location": "Tokyo, Kamakura & Kyoto, Japan",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "japan-14",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC06841_xv2w6j",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC06841_xv2w6j",
    "title": "Japan · Frame 14",
    "collectionSlug": "japan",
    "collectionTitle": "Japan",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2023",
    "location": "Tokyo, Kamakura & Kyoto, Japan",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "japan-15",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC06663_zu2acr",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC06663_zu2acr",
    "title": "Japan · Frame 15",
    "collectionSlug": "japan",
    "collectionTitle": "Japan",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2023",
    "location": "Tokyo, Kamakura & Kyoto, Japan",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "japan-16",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC07007_gzzhu4",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC07007_gzzhu4",
    "title": "Japan · Frame 16",
    "collectionSlug": "japan",
    "collectionTitle": "Japan",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2023",
    "location": "Tokyo, Kamakura & Kyoto, Japan",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "japan-17",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC07037_ibvekp",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC07037_ibvekp",
    "title": "Japan · Frame 17",
    "collectionSlug": "japan",
    "collectionTitle": "Japan",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2023",
    "location": "Tokyo, Kamakura & Kyoto, Japan",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "japan-18",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC07024_pvmrgu",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC07024_pvmrgu",
    "title": "Japan · Frame 18",
    "collectionSlug": "japan",
    "collectionTitle": "Japan",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2023",
    "location": "Tokyo, Kamakura & Kyoto, Japan",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "japan-19",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC07335_y9stan",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC07335_y9stan",
    "title": "Japan · Frame 19",
    "collectionSlug": "japan",
    "collectionTitle": "Japan",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2023",
    "location": "Tokyo, Kamakura & Kyoto, Japan",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "japan-20",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC07393_dzt83n",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC07393_dzt83n",
    "title": "Japan · Frame 20",
    "collectionSlug": "japan",
    "collectionTitle": "Japan",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2023",
    "location": "Tokyo, Kamakura & Kyoto, Japan",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "japan-21",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC07542_rchrpv",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC07542_rchrpv",
    "title": "Japan · Frame 21",
    "collectionSlug": "japan",
    "collectionTitle": "Japan",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2023",
    "location": "Tokyo, Kamakura & Kyoto, Japan",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "japan-22",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC07558_t3bugj",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC07558_t3bugj",
    "title": "Japan · Frame 22",
    "collectionSlug": "japan",
    "collectionTitle": "Japan",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2023",
    "location": "Tokyo, Kamakura & Kyoto, Japan",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "japan-23",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC06801_vjh18d",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC06801_vjh18d",
    "title": "Japan · Frame 23",
    "collectionSlug": "japan",
    "collectionTitle": "Japan",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2023",
    "location": "Tokyo, Kamakura & Kyoto, Japan",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "japan-24",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC06753_me0je2",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC06753_me0je2",
    "title": "Japan · Frame 24",
    "collectionSlug": "japan",
    "collectionTitle": "Japan",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2023",
    "location": "Tokyo, Kamakura & Kyoto, Japan",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "japan-25",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC07064-Enhanced-SR_bjfai0",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC07064-Enhanced-SR_bjfai0",
    "title": "Japan · Frame 25",
    "collectionSlug": "japan",
    "collectionTitle": "Japan",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1367,
    "year": "2023",
    "location": "Tokyo, Kamakura & Kyoto, Japan",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "japan-26",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC06835_w8gip1",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC06835_w8gip1",
    "title": "Japan · Frame 26",
    "collectionSlug": "japan",
    "collectionTitle": "Japan",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2023",
    "location": "Tokyo, Kamakura & Kyoto, Japan",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "japan-27",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC07455-Enhanced-SR_stb3he",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC07455-Enhanced-SR_stb3he",
    "title": "Japan · Frame 27",
    "collectionSlug": "japan",
    "collectionTitle": "Japan",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2023",
    "location": "Tokyo, Kamakura & Kyoto, Japan",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "japan-28",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC06635_rc7mhe",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC06635_rc7mhe",
    "title": "Japan · Frame 28",
    "collectionSlug": "japan",
    "collectionTitle": "Japan",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2023",
    "location": "Tokyo, Kamakura & Kyoto, Japan",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "japan-29",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC07014_pqyosm",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC07014_pqyosm",
    "title": "Japan · Frame 29",
    "collectionSlug": "japan",
    "collectionTitle": "Japan",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2023",
    "location": "Tokyo, Kamakura & Kyoto, Japan",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "japan-30",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC07175_chkyf2",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC07175_chkyf2",
    "title": "Japan · Frame 30",
    "collectionSlug": "japan",
    "collectionTitle": "Japan",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2023",
    "location": "Tokyo, Kamakura & Kyoto, Japan",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "japan-31",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC07267_coulxj",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC07267_coulxj",
    "title": "Japan · Frame 31",
    "collectionSlug": "japan",
    "collectionTitle": "Japan",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2023",
    "location": "Tokyo, Kamakura & Kyoto, Japan",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "japan-32",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC07379_zb9gc6",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC07379_zb9gc6",
    "title": "Japan · Frame 32",
    "collectionSlug": "japan",
    "collectionTitle": "Japan",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2023",
    "location": "Tokyo, Kamakura & Kyoto, Japan",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "japan-33",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC06723_qfpwxe",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC06723_qfpwxe",
    "title": "Japan · Frame 33",
    "collectionSlug": "japan",
    "collectionTitle": "Japan",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2023",
    "location": "Tokyo, Kamakura & Kyoto, Japan",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "japan-34",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC07535_h5uhbv",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC07535_h5uhbv",
    "title": "Japan · Frame 34",
    "collectionSlug": "japan",
    "collectionTitle": "Japan",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2023",
    "location": "Tokyo, Kamakura & Kyoto, Japan",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "japan-35",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC07002_vanupi",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC07002_vanupi",
    "title": "Japan · Frame 35",
    "collectionSlug": "japan",
    "collectionTitle": "Japan",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2023",
    "location": "Tokyo, Kamakura & Kyoto, Japan",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "japan-36",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC07126-Enhanced-NR_dxwj0w",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC07126-Enhanced-NR_dxwj0w",
    "title": "Japan · Frame 36",
    "collectionSlug": "japan",
    "collectionTitle": "Japan",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2023",
    "location": "Tokyo, Kamakura & Kyoto, Japan",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "japan-37",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC07340_hsaele",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC07340_hsaele",
    "title": "Japan · Frame 37",
    "collectionSlug": "japan",
    "collectionTitle": "Japan",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2023",
    "location": "Tokyo, Kamakura & Kyoto, Japan",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "new-york-city-01",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/IMG_3874-2_pxnzhx",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/IMG_3874-2_pxnzhx",
    "title": "New York City · Frame 01",
    "collectionSlug": "new-york-city",
    "collectionTitle": "New York City",
    "aspectRatio": 0.75,
    "width": 1536,
    "height": 2048,
    "year": "2022",
    "location": "New York City, NY",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "new-york-city-02",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC02327_heawas",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC02327_heawas",
    "title": "New York City · Frame 02",
    "collectionSlug": "new-york-city",
    "collectionTitle": "New York City",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2022",
    "location": "New York City, NY",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "new-york-city-03",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC02778_gfumar",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC02778_gfumar",
    "title": "New York City · Frame 03",
    "collectionSlug": "new-york-city",
    "collectionTitle": "New York City",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2022",
    "location": "New York City, NY",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "new-york-city-04",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC02925_wfynqi",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC02925_wfynqi",
    "title": "New York City · Frame 04",
    "collectionSlug": "new-york-city",
    "collectionTitle": "New York City",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2022",
    "location": "New York City, NY",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "new-york-city-05",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC02817-2_pjay9j",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC02817-2_pjay9j",
    "title": "New York City · Frame 05",
    "collectionSlug": "new-york-city",
    "collectionTitle": "New York City",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2022",
    "location": "New York City, NY",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "new-york-city-06",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC02689_nt7o7k",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC02689_nt7o7k",
    "title": "New York City · Frame 06",
    "collectionSlug": "new-york-city",
    "collectionTitle": "New York City",
    "aspectRatio": 1.5,
    "width": 1616,
    "height": 1080,
    "year": "2022",
    "location": "New York City, NY",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "new-york-city-07",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC02093_qfk6cc",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC02093_qfk6cc",
    "title": "New York City · Frame 07",
    "collectionSlug": "new-york-city",
    "collectionTitle": "New York City",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2022",
    "location": "New York City, NY",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "new-york-city-08",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC02588_bng6i6",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC02588_bng6i6",
    "title": "New York City · Frame 08",
    "collectionSlug": "new-york-city",
    "collectionTitle": "New York City",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2022",
    "location": "New York City, NY",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "new-york-city-09",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC02796_s7eq0z",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC02796_s7eq0z",
    "title": "New York City · Frame 09",
    "collectionSlug": "new-york-city",
    "collectionTitle": "New York City",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2022",
    "location": "New York City, NY",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "new-york-city-10",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC02828_omj2ck",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC02828_omj2ck",
    "title": "New York City · Frame 10",
    "collectionSlug": "new-york-city",
    "collectionTitle": "New York City",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2022",
    "location": "New York City, NY",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "new-york-city-11",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC02442_vqylnk",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC02442_vqylnk",
    "title": "New York City · Frame 11",
    "collectionSlug": "new-york-city",
    "collectionTitle": "New York City",
    "aspectRatio": 1.5,
    "width": 2560,
    "height": 1707,
    "year": "2022",
    "location": "New York City, NY",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "new-york-city-12",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC02138-2_oym5mj",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC02138-2_oym5mj",
    "title": "New York City · Frame 12",
    "collectionSlug": "new-york-city",
    "collectionTitle": "New York City",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2022",
    "location": "New York City, NY",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "new-york-city-13",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC02221_nqmwwm",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC02221_nqmwwm",
    "title": "New York City · Frame 13",
    "collectionSlug": "new-york-city",
    "collectionTitle": "New York City",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2022",
    "location": "New York City, NY",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "new-york-city-14",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC02799-2_nigxc8",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC02799-2_nigxc8",
    "title": "New York City · Frame 14",
    "collectionSlug": "new-york-city",
    "collectionTitle": "New York City",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2022",
    "location": "New York City, NY",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "new-york-city-15",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC02745_uzrhnc",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC02745_uzrhnc",
    "title": "New York City · Frame 15",
    "collectionSlug": "new-york-city",
    "collectionTitle": "New York City",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2022",
    "location": "New York City, NY",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "new-york-city-16",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC02735_drmsy1",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC02735_drmsy1",
    "title": "New York City · Frame 16",
    "collectionSlug": "new-york-city",
    "collectionTitle": "New York City",
    "aspectRatio": 0.67,
    "width": 2560,
    "height": 3841,
    "year": "2022",
    "location": "New York City, NY",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "new-york-city-17",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC02886_ou4qbx",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC02886_ou4qbx",
    "title": "New York City · Frame 17",
    "collectionSlug": "new-york-city",
    "collectionTitle": "New York City",
    "aspectRatio": 0.67,
    "width": 2560,
    "height": 3842,
    "year": "2022",
    "location": "New York City, NY",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "toronto-01",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC_0067-3_qwugpq",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC_0067-3_qwugpq",
    "title": "Toronto · Frame 01",
    "collectionSlug": "toronto",
    "collectionTitle": "Toronto",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2023",
    "location": "Toronto, Canada",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "toronto-02",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/IMG_2085_m4qu7l",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/IMG_2085_m4qu7l",
    "title": "Toronto · Frame 02",
    "collectionSlug": "toronto",
    "collectionTitle": "Toronto",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2023",
    "location": "Toronto, Canada",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "toronto-03",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/IMG_2117_vpumpi",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/IMG_2117_vpumpi",
    "title": "Toronto · Frame 03",
    "collectionSlug": "toronto",
    "collectionTitle": "Toronto",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2023",
    "location": "Toronto, Canada",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "toronto-04",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/IMG_2104_xbllca",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/IMG_2104_xbllca",
    "title": "Toronto · Frame 04",
    "collectionSlug": "toronto",
    "collectionTitle": "Toronto",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2023",
    "location": "Toronto, Canada",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "toronto-05",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/IMG_2094_gs1cfc",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/IMG_2094_gs1cfc",
    "title": "Toronto · Frame 05",
    "collectionSlug": "toronto",
    "collectionTitle": "Toronto",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2023",
    "location": "Toronto, Canada",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "toronto-06",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC_0887_gpc9pg",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC_0887_gpc9pg",
    "title": "Toronto · Frame 06",
    "collectionSlug": "toronto",
    "collectionTitle": "Toronto",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2023",
    "location": "Toronto, Canada",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "toronto-07",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/IMG_2082_ovlkdk",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/IMG_2082_ovlkdk",
    "title": "Toronto · Frame 07",
    "collectionSlug": "toronto",
    "collectionTitle": "Toronto",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2023",
    "location": "Toronto, Canada",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "toronto-08",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/IMG_2116_xgi4c5",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/IMG_2116_xgi4c5",
    "title": "Toronto · Frame 08",
    "collectionSlug": "toronto",
    "collectionTitle": "Toronto",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2023",
    "location": "Toronto, Canada",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "toronto-09",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/IMG_2114_uvvu41",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/IMG_2114_uvvu41",
    "title": "Toronto · Frame 09",
    "collectionSlug": "toronto",
    "collectionTitle": "Toronto",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2023",
    "location": "Toronto, Canada",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "toronto-10",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/IMG_2093_hrvcpg",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/IMG_2093_hrvcpg",
    "title": "Toronto · Frame 10",
    "collectionSlug": "toronto",
    "collectionTitle": "Toronto",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2023",
    "location": "Toronto, Canada",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "toronto-11",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC_0865_vdyvcn",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC_0865_vdyvcn",
    "title": "Toronto · Frame 11",
    "collectionSlug": "toronto",
    "collectionTitle": "Toronto",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2023",
    "location": "Toronto, Canada",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "toronto-12",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC_0926-2_oltd1y",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC_0926-2_oltd1y",
    "title": "Toronto · Frame 12",
    "collectionSlug": "toronto",
    "collectionTitle": "Toronto",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2023",
    "location": "Toronto, Canada",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "toronto-13",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/IMG_2081_ddbxvm",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/IMG_2081_ddbxvm",
    "title": "Toronto · Frame 13",
    "collectionSlug": "toronto",
    "collectionTitle": "Toronto",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2023",
    "location": "Toronto, Canada",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "toronto-14",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/IMG_2113_e51u1z",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/IMG_2113_e51u1z",
    "title": "Toronto · Frame 14",
    "collectionSlug": "toronto",
    "collectionTitle": "Toronto",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2023",
    "location": "Toronto, Canada",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "toronto-15",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/IMG_2110_o1sfbh",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/IMG_2110_o1sfbh",
    "title": "Toronto · Frame 15",
    "collectionSlug": "toronto",
    "collectionTitle": "Toronto",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2023",
    "location": "Toronto, Canada",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "toronto-16",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/IMG_2097_el3vbb",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/IMG_2097_el3vbb",
    "title": "Toronto · Frame 16",
    "collectionSlug": "toronto",
    "collectionTitle": "Toronto",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2023",
    "location": "Toronto, Canada",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "wildlife-01",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC07663_ozri3d",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC07663_ozri3d",
    "title": "Wildlife · Frame 01",
    "collectionSlug": "wildlife",
    "collectionTitle": "Wildlife",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2021",
    "location": "Wildlife Sanctuary",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "wildlife-02",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC07669_ujv4fn",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC07669_ujv4fn",
    "title": "Wildlife · Frame 02",
    "collectionSlug": "wildlife",
    "collectionTitle": "Wildlife",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2021",
    "location": "Wildlife Sanctuary",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "wildlife-03",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC05262-Enhanced-NR_vi1wfl",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC05262-Enhanced-NR_vi1wfl",
    "title": "Wildlife · Frame 03",
    "collectionSlug": "wildlife",
    "collectionTitle": "Wildlife",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2021",
    "location": "Wildlife Sanctuary",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "wildlife-04",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/IMG_2103_nn6ygf",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/IMG_2103_nn6ygf",
    "title": "Wildlife · Frame 04",
    "collectionSlug": "wildlife",
    "collectionTitle": "Wildlife",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2021",
    "location": "Wildlife Sanctuary",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "wildlife-05",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/IMG_2089_mdhqrn",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/IMG_2089_mdhqrn",
    "title": "Wildlife · Frame 05",
    "collectionSlug": "wildlife",
    "collectionTitle": "Wildlife",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2021",
    "location": "Wildlife Sanctuary",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "wildlife-06",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC07643_akj9o2",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC07643_akj9o2",
    "title": "Wildlife · Frame 06",
    "collectionSlug": "wildlife",
    "collectionTitle": "Wildlife",
    "aspectRatio": 0.67,
    "width": 1366,
    "height": 2048,
    "year": "2021",
    "location": "Wildlife Sanctuary",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "wildlife-07",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC05215_awfvh4",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC05215_awfvh4",
    "title": "Wildlife · Frame 07",
    "collectionSlug": "wildlife",
    "collectionTitle": "Wildlife",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2021",
    "location": "Wildlife Sanctuary",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "wildlife-08",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/IMG_2111_cqpzhy",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/IMG_2111_cqpzhy",
    "title": "Wildlife · Frame 08",
    "collectionSlug": "wildlife",
    "collectionTitle": "Wildlife",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2021",
    "location": "Wildlife Sanctuary",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "wildlife-09",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/IMG_2108_zia5zv",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/IMG_2108_zia5zv",
    "title": "Wildlife · Frame 09",
    "collectionSlug": "wildlife",
    "collectionTitle": "Wildlife",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2021",
    "location": "Wildlife Sanctuary",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "wildlife-10",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/IMG_2091_aytmxt",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/IMG_2091_aytmxt",
    "title": "Wildlife · Frame 10",
    "collectionSlug": "wildlife",
    "collectionTitle": "Wildlife",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2021",
    "location": "Wildlife Sanctuary",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "wildlife-11",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/IMG_2084_qles0o",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/IMG_2084_qles0o",
    "title": "Wildlife · Frame 11",
    "collectionSlug": "wildlife",
    "collectionTitle": "Wildlife",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2021",
    "location": "Wildlife Sanctuary",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "wildlife-12",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC07666_vq8smm",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC07666_vq8smm",
    "title": "Wildlife · Frame 12",
    "collectionSlug": "wildlife",
    "collectionTitle": "Wildlife",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1366,
    "year": "2021",
    "location": "Wildlife Sanctuary",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "wildlife-13",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/DSC05280_jn9q4g",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/DSC05280_jn9q4g",
    "title": "Wildlife · Frame 13",
    "collectionSlug": "wildlife",
    "collectionTitle": "Wildlife",
    "aspectRatio": 0.67,
    "width": 1365,
    "height": 2048,
    "year": "2021",
    "location": "Wildlife Sanctuary",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "wildlife-14",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/IMG_2109_paqgeb",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/IMG_2109_paqgeb",
    "title": "Wildlife · Frame 14",
    "collectionSlug": "wildlife",
    "collectionTitle": "Wildlife",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2021",
    "location": "Wildlife Sanctuary",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "wildlife-15",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/IMG_2101_uaa0mb",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/IMG_2101_uaa0mb",
    "title": "Wildlife · Frame 15",
    "collectionSlug": "wildlife",
    "collectionTitle": "Wildlife",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2021",
    "location": "Wildlife Sanctuary",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  },
  {
    "id": "wildlife-16",
    "url": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_2560/IMG_2088_yjxiaa",
    "thumbnailUrl": "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_800/IMG_2088_yjxiaa",
    "title": "Wildlife · Frame 16",
    "collectionSlug": "wildlife",
    "collectionTitle": "Wildlife",
    "aspectRatio": 1.5,
    "width": 2048,
    "height": 1365,
    "year": "2021",
    "location": "Wildlife Sanctuary",
    "exif": {
      "camera": "Sony Alpha 7C",
      "focalLength": "35mm",
      "aperture": "f/2.8",
      "shutterSpeed": "1/500s",
      "iso": 100
    }
  }
];
