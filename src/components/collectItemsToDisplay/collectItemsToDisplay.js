export function collectItemsToDisplay(props) {
  let usedItems = [];
  let remainingItems = [];
  let singleCycle = [];

  let positionCount = 0;

  let busyWidth = 0;
  let maxRowHeight = 0;
  let minHeightElement = 0;
  let minwidhtElement = 0;

  props.grillItems.forEach((element, index) => {
    if (element.height > props.height) {
      remainingItems.push(element);
    } else if (element.width + busyWidth <= props.width) {
      minHeightElement = element.height;
      minwidhtElement = element.width;
      busyWidth += element.width;
      maxRowHeight =
        maxRowHeight !== 0 && maxRowHeight > element.height
          ? maxRowHeight
          : element.height;

      singleCycle.push({
        position: positionCount + 1,
        widht: element.width,
        height: element.height,
        heightAftterUpdate: element.height,
        isAddedMoreThanOneItem: false,
      });

      usedItems.push(element);

      positionCount++;
    } else {
      remainingItems.push(element);
    }
  });

  let increaseHeight = minHeightElement;
  let isNeedCheckSmallerSize = false;
  let amountOfItems = 0;

  while (remainingItems.length > 0) {
    let reaminingHeight = maxRowHeight - increaseHeight;

    //ищем ту колонку которую нужно увеличить
    let selectedColumn;
    if (isNeedCheckSmallerSize) {
      selectedColumn = singleCycle.find(
        ({ height }) => height <= increaseHeight
      );

      amountOfItems--;
      if (amountOfItems === 0) {
        break;
      }
    } else {
      selectedColumn = singleCycle.find(
        (item) => item.heightAftterUpdate <= increaseHeight
      );
    }

    if (selectedColumn) {
      //ищем какой квадартик нужно добавить по высоте
      const elementToAdd = remainingItems.find(
        (item, index) => item.height === selectedColumn.height
      );

      if (!elementToAdd) {
        break;
      }

      if (reaminingHeight >= elementToAdd.height) {
        usedItems.push(elementToAdd);

        //увеличиваем на выосту добавленого элемента значение в колонке
        if (!isNeedCheckSmallerSize) {
          selectedColumn.heightAftterUpdate += elementToAdd.height;
          selectedColumn.isAddedMoreThanOneItem = true;
        }

        //удаляем уже добавленный елемент из списка доступных
        const itemToRemove = (item) => item.height === elementToAdd.height;
        let indexToRemove = remainingItems.findIndex(itemToRemove);
        remainingItems.splice(indexToRemove, 1);
      } else {
        const result = singleCycle.filter(
          (itemNotAdded) => !itemNotAdded.isAddedMoreThanOneItem
        );
        let freeSquare =
          reaminingHeight * (props.width - result.length * result[0].widht);
        amountOfItems = freeSquare / (minwidhtElement * minHeightElement) + 1;
        isNeedCheckSmallerSize = true;
        increaseHeight = minHeightElement;
      }
    } else {
      if (!isNeedCheckSmallerSize) {
        increaseHeight += 1;
      }
    }
  }

  let data = [];
  data.push({ items: usedItems, busyHeight: maxRowHeight });
  data.push({ items: remainingItems, busyHeight: props.height - maxRowHeight });
  return data;
}