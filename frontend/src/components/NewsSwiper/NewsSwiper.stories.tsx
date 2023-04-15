import React from "react";
import { Meta, Story } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { NewsSwiper, NewsSwiperProps } from "./NewsSwiper";
import { NewsSwiperItem, NewsSwiperItemProps } from "./NewsSwiperItem";
import { getNewsSwiperItemProps, getTag } from "./utils";

export default {
  component: NewsSwiperItem,
  title: "Components/NewsSwiper",
} as Meta;

export const Item: Story<NewsSwiperItemProps> = (args) => (
  <NewsSwiperItem {...args} />
);
Item.args = {
  headline: faker.lorem.words(),
  body: faker.lorem.paragraph(),
  date: faker.date.future(),
  slug: faker.internet.url(),
  tagsProps: [getTag(), getTag(), getTag()],
};
Item.storyName = "item";

export const ItemWithImage: Story<NewsSwiperItemProps> = (args) => (
  <NewsSwiperItem {...args} />
);
ItemWithImage.args = {
  headline: faker.lorem.words(),
  body: faker.lorem.paragraph(),
  date: faker.date.future(),
  slug: faker.internet.url(),
  tagsProps: [getTag(), getTag(), getTag()],
  image: {
    src: faker.image.image(),
    alt: faker.lorem.words(),
  },
};
ItemWithImage.storyName = "item with image";

export const Swiper: Story<NewsSwiperProps> = (args) => <NewsSwiper {...args} />;
Swiper.args = {
  headline: faker.lorem.words(),
  newsSwiperItemsProps: new Array(7).fill(null).map(() => {
    return getNewsSwiperItemProps();
  }),
};
Swiper.storyName = "Swiper";

export const SwiperWithBody: Story<NewsSwiperProps> = (args) => (
  <NewsSwiper {...args} />
);
SwiperWithBody.args = {
  headline: faker.lorem.words(),
  body: faker.lorem.paragraph(),
  newsSwiperItemsProps: new Array(7).fill(null).map(() => {
    return getNewsSwiperItemProps();
  }),
};
SwiperWithBody.storyName = "Swiper with body";

export const SwiperWithLink: Story<NewsSwiperProps> = (args) => (
  <NewsSwiper {...args} />
);
SwiperWithLink.args = {
  headline: faker.lorem.words(),
  linkToOverview: faker.internet.url(),
  newsSwiperItemsProps: new Array(7).fill(null).map(() => {
    return getNewsSwiperItemProps();
  }),
};
SwiperWithLink.storyName = "Swiper with link";
