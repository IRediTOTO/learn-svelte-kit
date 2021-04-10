export async function get({ params }) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js


	return {
        header:{
            "content-type":"json/application"
        },
        body: {
            article:"my posts"
        }
    };
}