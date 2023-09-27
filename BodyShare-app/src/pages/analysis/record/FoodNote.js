import FoodListItem from "pages/analysis/record/FoodListItem";

const Food = function({foodList}) {
  const list = foodList.map(record => {
    return(
      <FoodListItem key={record.planNo} record={record}/>
    );
  });
  return(
    list
  );
};

export default Food;