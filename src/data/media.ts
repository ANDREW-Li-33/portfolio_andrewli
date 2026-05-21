// Image source resolver. Supports two storage backends:
//
//   1. Cloudinary CDN — pass a public_id:
//        img('public_id_xyz')
//        img('public_id_xyz', 'c_crop,w_2400,h_1800,g_south_west')
//      The optional second argument is a Cloudinary transformation
//      string, inserted between the upload root and the public id.
//
//   2. Local files in /public — pass an absolute path starting with '/':
//        img('/images/bot_image_1.png')
//      Returned as-is. Use this for project-specific assets that aren't
//      worth uploading to Cloudinary.
export const CLD = 'https://res.cloudinary.com/dxshkhibs/image/upload';
export const img = (id: string, transform?: string) => {
  if (id.startsWith('/')) return id;
  return transform ? `${CLD}/${transform}/${id}` : `${CLD}/${id}`;
};
