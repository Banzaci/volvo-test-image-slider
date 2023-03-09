import React, { useEffect, useState } from "react";
import useAsync from "../src/utils/useAsync";
import Car, { CarType } from "../src/components/Car/Car";
import { Block, Spinner } from "vcc-ui";
import ImageSlider from "../src/components/ImageSlider/ImageSlider";
import DropDown from "../src/components/Filter/DropDown";
import getCarBodyTypes from "../src/utils/getCarBodyTypes";

const Index = () => {
  const { data, loading, error } = useAsync<CarType>("/api/cars.json");
  const [ filteredCarList, setFilteredCarList ] = useState<CarType[]>([]);

  useEffect(() => {
    if(data) {
      setFilteredCarList(data);
    }

  }, [data]);

  if (loading) return  <Spinner />;
  if (!loading && error) return <div>{ error }</div>;
  if (!data) return <div>Something went wrong</div>;

  const onChange = (ev:any) => {
    const selectedValue = ev.target.value;
    if (selectedValue === '-1') {
      setFilteredCarList(data);
      return;
    }
    const filterList = data.filter(({ bodyType }) => bodyType === selectedValue);
    setFilteredCarList(filterList);
  }

  return (
    <Block extend={{ maxWidth: 800, margin: '0 auto' }}>
      <DropDown
        defaultTitle="All body types"
        items={getCarBodyTypes(data)}
        onChange={onChange}
        style={{ maxWidth: 200, margin: '20px 0 20px 20px' }}
      />
      <ImageSlider>
        {filteredCarList.map(Car)}
      </ImageSlider>
    </Block>
  );
}

export default Index;
