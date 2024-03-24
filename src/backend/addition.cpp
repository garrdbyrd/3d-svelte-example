#include <iostream>
#include <sstream>

int main(int argc, char *argv[]) {
    if (argc < 3) {
        std::cerr << "Usage: " << argv[0] << " <number1> <number2>" << std::endl;
        return 1;
    }

    std::istringstream iss1(argv[1]);
    std::istringstream iss2(argv[2]);
    double num1, num2;

    if (!(iss1 >> num1) || !(iss2 >> num2)) {
        std::cerr << "Invalid numbers" << std::endl;
        return 1;
    }

    std::cout << num1 + num2 << std::endl;
    return 0;
}
