# Projekt Notatki

Aplikacja internetowa do zarządzania notatkami, składająca się z frontendu w Angularze oraz dwóch alternatywnych backendów (Node.js/Express lub Python/Flask).

## Funkcjonalności

- Dodawanie nowych notatek (tytuł i treść)
- Wyświetlanie listy notatek
- Usuwanie notatek
- Dane przechowywane w bazie MySQL

## Wymagania

- Node.js (wersja 18+ zalecana)
- Python (dla backendu Flask)
- MySQL Server

## Instalacja i Uruchomienie

### 1. Konfiguracja Bazy Danych

1. Upewnij się, że masz zainstalowany i uruchomiony serwer MySQL.
2. Utwórz bazę danych i tabelę, importując plik `baza.sql`:
   ```bash
   mysql -u root -p < baza.sql
   ```
   *Domyślna konfiguracja zakłada użytkownika `root` bez hasła. Jeśli masz inne ustawienia, będziesz musiał je zmienić w plikach konfiguracyjnych backendu.*

### 2. Uruchomienie Backendu

Możesz wybrać jeden z dwóch dostępnych backendów. Oba działają na porcie `3000`.

#### Opcja A: Backend Node.js (Express)

1. Przejdź do katalogu `backend-express`:
   ```bash
   cd backend-express
   ```
2. Zainstaluj zależności:
   ```bash
   npm install
   ```
3. Skonfiguruj połączenie z bazą danych w pliku `index.js` (jeśli inne niż domyślne).
4. Uruchom serwer:
   ```bash
   node index.js
   ```

#### Opcja B: Backend Python (Flask)

1. Przejdź do katalogu `backend-flask`:
   ```bash
   cd backend-flask
   ```
2. (Opcjonalnie) Utwórz i aktywuj wirtualne środowisko.
3. Zainstaluj zależności:
   ```bash
   pip install flask flask-cors mysql-connector-python
   ```
4. Skonfiguruj połączenie z bazą danych w pliku `app.py` (jeśli inne niż domyślne).
5. Uruchom serwer:
   ```bash
   python app.py
   ```

### 3. Uruchomienie Frontendu (Angular)

1. Przejdź do katalogu `frontend`:
   ```bash
   cd frontend
   ```
2. Zainstaluj zależności:
   ```bash
   npm install
   ```
3. Uruchom serwer deweloperski:
   ```bash
   npm start
   ```
4. Otwórz przeglądarkę i wejdź na adres `http://localhost:4200`.

## Struktura Projektu

- `frontend/` - Kod źródłowy aplikacji klienckiej (Angular)
- `backend-express/` - Serwer API napisany w Node.js i Express
- `backend-flask/` - Alternatywny serwer API napisany w Pythonie i Flask
- `baza.sql` - Skrypt SQL do utworzenia struktury bazy danych
