import { Card, CardContent } from "@/components/ui/card";
import { scaleOrdinal } from "d3-scale";
import { schemeSet2 } from "d3-scale-chromatic";
import React from "react";
import WordCloud from "react-d3-cloud";

interface WordData {
  text: string;
  value: number;
  username: string;
}

interface WordCloudProps {
  words: WordData[];
}

const WordCloudComponent: React.FC<WordCloudProps> = ({ words }) => {
  const colorScale = scaleOrdinal(schemeSet2);

  const formatData = words.map((word) => ({
    text: `${word.text}`,
    value: word.value,
  }));

  return (
    <Card className="w-full h-[500px] bg-transparent border-[#323232]">
      <CardContent>
        <WordCloud
          data={formatData}
          width={800}
          height={500}
          font="Arial"
          fontWeight="normal"
          fontSize={(word) => Math.log2(word.value) * 10 + 31}
          rotate={(word, index) => {
            const rotations = [0, 0, 90, 0, -90]; // More horizontal than vertical
            return rotations[index % rotations.length];
          }}
          padding={2}
          fill={(d, i) => colorScale(i.toString())}
        />
      </CardContent>
    </Card>
  );
};

export default WordCloudComponent;
