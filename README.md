I want to render latex equations in md and mdx files. To set this up, my config looks like this:

    import remarkMath from "remark-math"
    import rehypeMathjax from "rehype-mathjax"

    // https://astro.build/config
    export default defineConfig({
    site: 'https://example.com',
    markdown: {
        remarkPlugins: [
        remarkMath
        ],
        rehypePlugins: [
        rehypeMathjax
        ]
    },
    integrations: [mdx({
        
    }), sitemap(), tailwind()],
    });


When I create a md file containing this:
$$
L = \frac{1}{2} \rho v^2 S C_L
$$


it renders just fine. But when I change the file to mdx (which I need), the svg doesn't render correctly anymore.
After some debugging I found out that when using mdx, all attributes containing colons are wrong:

correct (in md):
<g data-mml-node="mo" transform="translate(958.8,0)">
    <use data-c="3D" xlink:href="#MJX-3-TEX-N-3D"></use>
</g>

wrong (in mdx):
<g data-mml-node="mo" transform="translate(958.8,0)">
    <use data-c="3D" xlinkhref="#MJX-3-TEX-N-3D"></use>
</g>


xlinkhref is wrong and results in a faulty svg.

Now I'm stuck and don't know where the problem is, but I think it must be in the mdx render pipeline. How can I fix this or how do I debug where the wrong attribute thing even happens?