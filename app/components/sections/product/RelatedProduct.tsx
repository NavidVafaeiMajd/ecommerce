const RelatedProduct = () => {
  return (
    <div>
      <div>
        <h3 className="special  mt-20">Similar Product</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-5">
        {[...Array(8)].map((_, index) => (
          // <ProductItem key={index} />
          <></>
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
