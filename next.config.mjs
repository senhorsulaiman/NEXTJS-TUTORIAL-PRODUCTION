/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {

        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.thecocktaildb.com',
                pathname: '/images/**'


            },
            {
                protocol: 'https',
                hostname: 'dbz-images.dubizzle.com',
                port: '',
                pathname: '/images/**'


            }
        ]
    }
};

export default nextConfig;
