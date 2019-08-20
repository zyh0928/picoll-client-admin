<template>
  <svg
    :viewBox="`0 0 ${viewWidth} ${fontSize * 1.2}`"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text
      :font-size="fontSize"
      :stroke-width="strokeWidth"
      :stroke="strokeColor"
      :x="viewWidth / 2"
      :y="fontSize"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      text-anchor="middle"
    >
      {{ text }}
      <animate
        :dur="duration"
        :values="`0 ${length};${length} ${length};0 ${length}`"
        attributeName="stroke-dasharray"
        begin="0"
        calcMode="spline"
        keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
        keyTimes="0;0.5;1"
        repeatCount="indefinite"
      />
      <animate
        :dur="duration"
        :values="`0;0;-${length}`"
        attributeName="stroke-dashoffset"
        begin="0"
        calcMode="linear"
        keyTimes="0;0.5;1"
        repeatCount="indefinite"
      />
    </text>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class FontBoard extends Vue {
  readonly fontSize = 100;

  @Prop({ type: String, default: "#ffffff" })
  readonly strokeColor!: string;

  @Prop({ type: [String, Number], default: 1 })
  readonly strokeWidth!: string | number;

  @Prop({ type: String, default: "" })
  readonly text!: string;

  @Prop({ type: [String, Number], default: 2 })
  readonly duration!: string | number;

  get viewWidth() {
    let width = 0;

    const regex = /[\u0020-\u00ff]/;
    for (const char of this.text) {
      let len = this.fontSize;

      if (regex.test(char)) {
        len *= 0.55;

        if (char === " ") len *= 0.2;
      }

      width += len;
    }

    return width;
  }

  get length() {
    return this.fontSize * 5;
  }
}
</script>
