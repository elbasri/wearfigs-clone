import {api} from '../../src/utils/constants';



/**
 * Get Products.
 *
 * Endpoint /api/get-products or '/api/get-products?perPage=2'
 *
 * @param req
 * @param res
 * @return {Promise<void>}
 */
export default async function handler(req, res) {

	const responseData = {
		success: false,
		categories: []
	}

  const { perPage } = req?.query ?? {};
  const { ID } = req?.query ;
  const { parent } = req?.query ;

	try {

		const { data } = await api.get(
            'products/categories/',
			{
				per_page: perPage || 50,
                id: ID || null,
                parent: parent || null
			}
		);

		responseData.success = true;
		responseData.categories = data;

		res.json( responseData );

	} catch ( error ) {

		responseData.error = error.message;
	  res.status( 500 ).json( responseData  );
	}
}