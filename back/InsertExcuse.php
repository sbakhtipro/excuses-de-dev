<?php

class InsertExcuse {

    public array $db = [];

    public function __construct() {
        $this->db = $this->fetchDatabase();
    }

    private function fetchDatabase(): array {
        $db = 'database.json';
        $readDb = file_get_contents($db);
        $phpDb = json_decode($readDb,true);
        return $phpDb;
    }

    public function insert($message,$tag): void {
        $newExcuse = [
            'message' => htmlspecialchars($message),
            'tag' => htmlspecialchars($tag),
            'http_code' => $this->generateHttpCode($this->db)
        ];
        $this->db[] = $newExcuse;
        file_put_contents('database.json', json_encode($this->db,JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE));
        header('Location:/?insert=true');
        exit;
    }

    private function generateHttpCode(): int {
        $httpCodes = array_column($this->db, 'http_code');
        return max($httpCodes) + 1;
    }

}