<script context="module">

   export async function load({ page, fetch, session, context }) {
      //       const data = await fetch("http://localhost/demo/graphql", {
      //          method: "POST",
      //          headers: { "Content-Type": "application/json" },
      //          body: JSON.stringify({
      //             query: `
      //             query MyQuery {
      //   posts(first: 10) {
      //     edges {
      //       node {
      //         id
      //         featuredImage {
      //           node {
      //             mediaItemUrl
      //             altText
      //           }
      //         }
      //       }
      //     }
      //   }
      // }
      // `,
      //          }),
      //       })
      //          .then((res) => res.json())
      //          .then((res) => {
      //             console.log(res.data)
      //             return res
      //          });

      return {
         props: {
            article: "data",
         },
      };

      return {
         status: "ok",
         error: new Error(`Could not load `),
      };
   }
</script>

<script>
   export let status;
   export let error;
   export let article;
</script>

<h3>This is a post</h3>
<h3>{JSON.stringify(article)}</h3>
