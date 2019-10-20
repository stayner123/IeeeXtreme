#include <iostream>

using namespace std;

int main() {
    int N;
    cin >> N;
    int posY = N / 2;
    
    cout << "y";
    
    for(int i = 1; i < posY; i++) {
        cout << "y";     
    }
    if (N != 1) cout << "Y";
    for(int i = posY + 1; i < N; i++) {
        cout << "y" ;
    }
    
    return 0;
}
