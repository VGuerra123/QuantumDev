import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "./ui/button";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export const PricingCard = ({ title, price, features, popular }: PricingCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`rounded-2xl p-6 ${
        popular
          ? "bg-gradient-to-br from-indigo-600 to-purple-700 border-2 border-indigo-400"
          : "bg-white/10 backdrop-blur-lg border border-white/20"
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {popular && (
        <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium absolute -top-3 right-4">
          Popular
        </span>
      )}
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-white">{price}</span>
        <span className="text-gray-300 ml-2">/mes</span>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <Check className="w-5 h-5 text-indigo-400 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <Button
        variant={popular ? "gradient" : "outline"}
        className="w-full"
      >
        Comenzar ahora
      </Button>
    </motion.div>
  );
};