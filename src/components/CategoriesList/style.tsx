import tw from "tailwind-styled-components";

export const CategoriesWrapper = tw.div`categoryList container mx-auto mt-32 sm:mt-40 mb-24 flex flex-col sm:grid sm:grid-cols-3 sm:gap-4 lg:gap-12`;
export const CategoryItemWrapper = tw.div`category-item rounded-md bg-secondaryLight mb-24 sm:mb-0 mx-8 sm:mx-0`;
export const CategoryItemContainer = tw.div`category-wrapper -mt-20 mb-4 flex flex-col justify-center items-center`;
export const CategoryItemImage = tw.img`w-52`;
