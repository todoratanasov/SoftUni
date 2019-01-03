using System; 

namespace Problem_1_SoftUni_Reception
{
    class Program
    {
        static void Main(string[] args)
        {
            double firstEmploee = int.Parse(Console.ReadLine());
            double secondEmploee = int.Parse(Console.ReadLine());
            double thirdEmploee = int.Parse(Console.ReadLine());
            double totalStudents = int.Parse(Console.ReadLine());

            double cappability = firstEmploee + secondEmploee + thirdEmploee;

            double allHours = totalStudents / cappability;     //делим на 3, за да разберем колко часове почивка имат

            double brakes = Math.Floor(allHours / 3);

            double answer = Math.Ceiling(allHours + brakes);

            
            

            Console.WriteLine($"Time needed: {answer}h.");
            
            

            

            
            


        }
    }
}
