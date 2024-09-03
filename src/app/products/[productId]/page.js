const DynamicProductPage = ({ params, searchParams }) => {
  console.log(params);
  console.log(searchParams);
  return (
    <div>
      <h1 className="">Dynamic Product page: {params.productId}</h1>
    </div>
  );
};

export default DynamicProductPage;
