import { Text, View } from "react-native";
import { ScrollView } from "react-native";

import BadmintonCourtCard from "../components/card";
import SearchInput from "../components/text-input/sreach-bar";

const badmintonCourts = [
  {
    name: "Sân Cầu Lông Phú Thọ",
    location: "221 Lý Thường Kiệt, Phường 15, Quận 11, TP. Hồ Chí Minh",
    rating: 4.5,
    status: "ok",
    phone: "+84 28 3855 3030",
    price: 1000000,
    numberOfYard: [
      { id: "yard1", price: 100000, yardNumber: 1 },
      { id: "yard2", price: 120000, yardNumber: 2 },
      { id: "yard3", price: 150000, yardNumber: 3 },
    ],
  },
  {
    name: "Sân Cầu Lông Tân Bình",
    location: "18 Hoàng Hoa Thám, Phường 12, Quận Tân Bình, TP. Hồ Chí Minh",
    rating: 4.3,
    status: "Không ok",
    phone: "+84 28 3811 1111",
    price: 1000000,
    numberOfYard: [
      { id: "yard1", price: 100000, yardNumber: 1 },
      { id: "yard2", price: 120000, yardNumber: 2 },
      { id: "yard3", price: 150000, yardNumber: 3 },
    ],
  },
];
export default function Home() {
  return (
    <ScrollView>
      <Text className="text-2xl font-bold text-brown-700 text-center mb-3 mt-4">
        Danh sách
      </Text>
      <SearchInput />
      <View className="flex-1">
        {badmintonCourts.map((court, index) => (
          <BadmintonCourtCard key={index} court={court} />
        ))}
      </View>
    </ScrollView>
  );
}
