import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export const api = new WooCommerceRestApi({
	url: process.env.NEXT_PUBLIC_WORDPRESS_URL,
    consumerKey: process.env.WC_CONSUMER_KEY,
	consumerSecret: process.env.WC_CONSUMER_SECRET,
	version: "wc/v3"
});

export const getCategories = async (parent = null, per_page = null, id = null, slug =null) => {
		return await api.get('products/categories',{
			id,
			per_page ,
			parent,
			slug
		   });
}

export const searchCategories = async (params) => {
		return await api.get(`products/categories?${params}`);
}

export const getProducts = async (parent, per_page = null, id = null, slug= null, search= null, category= null ) => {
		return await api.get('products',{
			id,
			per_page ,
			parent,
			slug,
			search,
			category
		   });
}
export const getVariations = async (id) => {
		return await api.get(`products/${id}/variations?per_page=100`,{
			per_page: 100
		});
}