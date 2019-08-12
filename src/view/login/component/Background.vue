<template>
  <div class="box">
    <svg
      class="view"
      viewBox="0 25 200 100"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="blur">
        <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
      </filter>

      <animate
        :dur="moveDuration"
        attributeName="viewBox"
        repeatCount="indefinite"
        to="100 25 200 100"
      />

      <g filter="url(#blur)" height="100" width="200">
        <rect
          :fill="colors[0]"
          :height="item.size"
          :key="`backgrid${index}`"
          :width="item.size"
          :x="item.x"
          :y="item.y"
          v-for="(item, index) of list"
        >
          <animate
            :begin="item.begin"
            :dur="colorDuration"
            :keyTimes="colorTime"
            :values="animateValues"
            attributeName="fill"
            repeatCount="indefinite"
          />
        </rect>
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

interface Gird {
  begin: string;
  size: number;
  x: number;
  y: number;
}

@Component
export default class FontBoard extends Vue {
  @Prop({ type: Number, default: 10 })
  count!: number;

  @Prop({ type: [String, Number], default: 12 })
  moveDuration!: string | number;

  get list() {
    const list: Gird[] = [];

    const count = 100 % this.count ? 10 : this.count;
    const size = 100 / count;

    for (let x = 0; x < count; x++)
      for (let y = 0; y < count; y++) {
        const grid: Gird = {
          begin: "-" + (Math.random() * 2 + (y % 2 ? 0 : 0.5)).toFixed(3),
          size,
          x: x * size,
          y: y * size
        };

        list.push(grid);

        list.push({ ...grid, x: grid.x + 100 });
      }

    return list;
  }

  @Prop({
    type: Array,
    default: () => [
      // Rainbow
      "#e6261f",
      "#eb7532",
      "#f7d038",
      "#a3e048",
      "#49da9a",
      "#34bbe6",
      "#4355db",
      "#d23be7",
      // Algolia
      "#050f2c",
      "#003666",
      "#00aeff",
      "#3369e7",
      "#8e43e7",
      "#b84592",
      "#ff4f81",
      "#ff6c5f",
      "#ffc168",
      "#2dde98",
      "#1cc7d0"
    ]
  })
  colors!: string[];

  get animateValues() {
    return this.colors.concat([this.colors[0]]).join(";");
  }

  get colorTime() {
    const time: number[] = [];

    for (let i = 0; i < this.colors.length; i++)
      time.push(Math.round((i / this.colors.length) * 1000) / 1000);

    time.push(1);

    return time.join(";");
  }

  get colorDuration() {
    return this.colors.length * 0.3;
  }
}
</script>

<style lang="scss" scoped>
.box {
  @include size(100%);
  overflow: hidden;
}

.view {
  width: 200%;
}
</style>
