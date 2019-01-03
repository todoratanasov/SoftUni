using System;

namespace _9._Longer_Line
{
    class Program
    {
        //You are given the coordinates of four points in the 2D plane. The first and the second pair of points form two different lines. 
        //Print the longer line in format "(X1, Y1)(X2, Y2)" starting with the point that is closer to the center of the coordinate system 
        //(0, 0) (You can reuse the method that you wrote for the previous problem). If the lines are of equal length, print only the first one.
        static void Main(string[] args)
        {
            string numbers = CheckCoordinates(double.Parse(Console.ReadLine()), double.Parse(Console.ReadLine()), double.Parse(Console.ReadLine()), double.Parse(Console.ReadLine()));
            string numbers2 = CheckCoordinates(double.Parse(Console.ReadLine()), double.Parse(Console.ReadLine()), double.Parse(Console.ReadLine()), double.Parse(Console.ReadLine()));

            Console.WriteLine($"{numbers} {numbers2}");
        }
        static string CheckCoordinates(double x, double y, double x1, double y1)
        {
            double xPos = x;
            double yPos = y;
            double x1Pos = x1;
            double y1Pos = y1;

            double resultX = 0;
            double resultY = 0;

            if (x < 0)
            {
                xPos = x * -1;
            }
            if (y < 0)
            {
                yPos = y * -1;
            }
            if (x1 < 0)
            {
                x1Pos = x1 * -1;
            }
            if (y1 < 0)
            {
                y1Pos = y1 * -1;
            }
            if (xPos + yPos < x1Pos + y1Pos)
            {
                resultX = x;
                resultY = y;
            }
            else if (xPos + yPos > x1Pos + y1Pos)
            {
                resultX = x1;
                resultY = y1;
            }
            else if ((xPos + yPos == x1Pos + y1Pos))
            {
                resultX = x;
                resultY = y;
            }

            string answer = resultX.ToString() +" "+ resultY.ToString();

            return answer;
        }
    }
}
