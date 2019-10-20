#include <iostream>

using namespace std;

int wordCounter(int K, int J) {
    int counter = 0;
    
    while (K > 0 && J > 0 && K + J >= 3 ) {
        K -= 1;
        J -= 1;
        if ( K > J) {
            K -= 1;
        } else {
            J -= 1;
        }
        counter++;
    }
    return counter;
}

int main() {
    int a, b;
    
    cin >> a >> b;
    int res = wordCounter(a, b);
    cout << res;
    
    return 0;
}
