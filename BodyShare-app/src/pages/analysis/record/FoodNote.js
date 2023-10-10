import FoodListItem from "pages/analysis/record/FoodListItem";

const Food = function ({ foodList, onDelete }) {
  const list = foodList.map(record => {
    return (
      <FoodListItem key={record.planNo} record={record} onDelete={onDelete} />
    );
  });
  return (
    list
  );
};

export default Food;