import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {callProductDetailAPI} from "../../apis/ProductAPI";
import ProductDetailItem from "../../components/items/ProductDetailItem";

function ProductDetail() {

    const dispatch = useDispatch();
    const { productCode} = useParams();
    const { product } = useSelector(state => state.productReducer);


    useEffect(() => {
        dispatch(callProductDetailAPI({productCode}));
    }, [dispatch, productCode]);


    console.log('product', product);
    return (
        <>
            {
                product &&
                    <div>
                        <ProductDetailItem product={product.productInfo} option={product.productOptions}/>
                    </div>
            }
        </>
    );
}

export default ProductDetail;