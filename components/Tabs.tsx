import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PomodoroClock from './PomodoroClock';

const PomodoroTabs: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-gradient-to-br from-pink-400 to-red-300">
      <Tabs defaultValue="pomodoro" className="w-full max-w-5xl bg-white rounded-lg shadow-lg">
        <TabsList className="flex flex-col md:flex-row relative justify-around mb-6 p-4 border-b border-none bg-transparent">
          <TabsTrigger 
            value="pomodoro" 
            className=" border-none flex-1 text-center text-lg font-semibold text-pink-600 py-2 hover:bg-pink-100 transition duration-300 rounded-md"
          >
            Pomodorchek
          </TabsTrigger>
          <TabsTrigger 
            value="short-break" 
            className="flex-1 text-center text-lg font-semibold text-pink-600 py-2 hover:bg-pink-100 transition duration-300 rounded-md"
          >
            Little Spoon
          </TabsTrigger>
          <TabsTrigger 
            value="long-break" 
            className="flex-1 text-center text-lg font-semibold text-pink-600 py-2 hover:bg-pink-100 transition duration-300 rounded-md"
          >
            Big Spoon
          </TabsTrigger>
        </TabsList>
        <div className="p-6">
          <TabsContent value="pomodoro">
            <PomodoroClock sessionType="Work" />
          </TabsContent>
          <TabsContent value="short-break">
            <PomodoroClock sessionType="Short Break" />
          </TabsContent>
          <TabsContent value="long-break">
            <PomodoroClock sessionType="Long Break" />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default PomodoroTabs;
