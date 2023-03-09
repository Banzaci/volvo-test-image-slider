import Image from "next/image";
import React from "react";
import { Block, Link, Text, Flex } from 'vcc-ui';
import styles from "./Car.module.css";
import Icon from "../Icon/Icon";

export type CarType = {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}

const Car: React.FC<CarType> = ({ id, modelName, bodyType, modelType, imageUrl }: CarType) => {
  const carBodyType = bodyType.toUpperCase();
  return(
  <Block key={id} extend={{padding: 10 }}>
    <Text
      variant="bates"
      aria-label={carBodyType}
    >
      {carBodyType}
    </Text>
    <Flex
      extend={{
        '@media (min-width: 480px)': {
          flexDirection: 'row',
        },
      }}
    >
      <Text
        aria-label={modelName}
        subStyle="emphasis" as="h2" style={{ marginRight: 8 }}>
          {modelName}
        </Text>
      <Text aria-label={modelType}>
        {modelType}
      </Text>        
    </Flex>
    <Flex className={styles.carImage}>
      <Image
        src={imageUrl}
        alt={modelName} 
        width="100%"
        height="100%"
        layout="responsive"
        aria-label={`Image of carmodel ${modelName}`}
      />
    </Flex>
    <Flex
        extend={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Link href={`/learn/${id}`} style={{ marginRight: 20 }} aria-label="Link to learn more">
          <span style={{ marginRight: 4 }}>Learn</span>
          <Icon src="/images/chevron-small.svg" alt="Arrow" width={12} height={12} />
        </Link>
        <Link href={`/shop/${id}`} aria-label="Link to shop">
          <span style={{ marginRight: 4 }}>Shop</span>
          <Icon src="/images/chevron-small.svg" alt="Arrow" width={12} height={12} />
        </Link>
    </Flex>
  </Block>
);}

export default Car;
